<template>
    <div>
        <!-- 2 -->
        <div v-if='isLoading' class="loader-wrapper">
            <div class="loader loader--style2" title="1">
                <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                    <animateTransform attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="0.6s"
                    repeatCount="indefinite"/>
                    </path>
                </svg>
                <p>L O A D I N G . . . </p>
            </div>
            
        </div>
        
    </div>
</template>

<style scoped>
    .loader-wrapper{
        background:linear-gradient(rgba(0, 0, 0, 0.705), rgba(0, 0, 0, 0.705));
        position:fixed;
        top:0;
        left:0;
        width:100vw;
        z-index: 999;
        height:100vh;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
    }
    .loader-wrapper p{
        color:white;
    margin-top: 20px;
    }
    .loader{
        margin: 0 0 2em;
        height: 100px;
        width: 100%;
        text-align: center;
        padding: 0;
        margin: 0 auto 1em;
        display: inline-block;
        vertical-align: top;
        transform: scale(1.5,1.5);
        }

        /*
        Set the color of the icon
        */
        svg path,
        svg rect{
        fill: white;
        }
</style>

<script>
import {mapState} from 'vuex';

export default {
    computed: mapState(['isLoading'])
}
</script>