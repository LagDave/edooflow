<template>
    <div>
        <loader-component></loader-component>
        <body class="--auth">
            <div class="l-login">
                <div class="--sides">
                    <a href="" class="l-login__logo">
                        <img src="https://i.pinimg.com/originals/60/b9/b1/60b9b11b28fde9cc13dd039ce8514076.png" alt="">
                    </a>
                    <h4 class="l-login__header">Sign Up</h4>
                </div>
                <div class="--sides">
                    <div class="l-login__main">
                        <div class="form-group form-group-default input-group">
                            <div class="form-input-group">
                                <input v-model='full_name' type="text" class="form-control"  required="" placeholder="Full name" aria-required="true" aria-invalid="true">
                            </div>
                        </div>
                        <div class="form-group form-group-default input-group">
                            <div class="form-input-group">
                                <input v-model='phone_number' type="text" class="form-control"  required="" placeholder="Phone number" aria-required="true" aria-invalid="true">
                            </div>
                        </div>

                        <v-select
                        class='v-sel'
                            v-model='country'
                            :options="countries"
                        ></v-select>

                        <v-select
                        class='v-sel'
                            v-model='role'
                            :options="roles"
                        ></v-select>

                        <button @click='tryCreate' class="l-login__main--button --light">Create Account</button>
                        <span class="l-login__main--line">
                            <p>or</p>
                        </span>
                        <button class="l-login__main--button">
                            <svg viewBox="0 0 24 24">
                                <g>
                                    <path d="m12 1c-5.738 0-10.444 4.394-10.95 10h8.95v-3c0-.404.244-.769.617-.924.374-.155.804-.069 1.09.217l4 4c.391.391.391 1.023 0 1.414l-4 4c-.286.286-.716.372-1.09.217-.373-.155-.617-.52-.617-.924v-3h-8.95c.506 5.606 5.212 10 10.95 10 6.075 0 11-4.925 11-11s-4.925-11-11-11z"/>
                                </g>
                            </svg>Sign In
                        </button>
                    </div>
                    <div class="l-login__who">© 2020 Edooflow LLC.</div>
                </div>
            </div>   

        </body>


    </div>
</template>


<style>
    .v-sel{
        background:black;
        width:100%;
        font-size:15px;
        font-family: 'maison-bold';
        border:2px solid #222326;
        padding:8px 0px;
        border-radius: 8px;
        color:white;
        margin: 10px;
    }
    span.vs__selected{
        color:#929aac;
    }
    .vs__clear{
        background:transparent;
    }
    .vs__search{
        color:#929aac;
    }
</style>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import LoaderComponent from '../LoaderComponent.vue';

export default {
    data(){
        return{
            reg_error: false,
            full_name: "",
            phone_number: "",
            country:"Choose your Country",
            role:"Joining EduFlow as?",
            countries: [
                {label: 'Delaware', code: 'DE'},
                {label: 'Florida', code: 'FL'},
                {label: 'Georgia', code: 'GA'},
                {label: 'Indiana', code: 'IN'},
                {label: 'Maine', code: 'ME'},
                {label: 'Maryland', code: 'MD'},
                {label: 'Massachusetts', code: 'MA'},
                {label: 'Michigan', code: 'MI'},
                {label: 'New Hampshire', code: 'NH'},
                {label: 'New Jersey', code: 'NJ'},
                {label: 'New York', code: 'NY'},
                {label: 'North Carolina', code: 'NC'},
                {label: 'Ohio', code: 'OH'},
                {label: 'Pennsylvania', code: 'PA'},
                {label: 'Rhode Island', code: 'RI'},
                {label: 'South Carolina', code: 'SC'},
                {label: 'Vermont', code: 'VT'},
                {label: 'Virginia', code: 'VA'},
                {label: 'West Virginia', code: 'WV'}
            ],
            roles:[
                {label: 'Learner', code: 'learner'},
                {label: 'Parent', code: 'parent'},
                {label: 'Teacher', code: 'teacher'},
                {label: 'Institution', code: 'institution'}
            ]
        }
    },
    

    methods:{
        tryCreate(){
            this.$store.dispatch('toggleLoading');
            let user = {
                full_name: this.full_name,
                phone_number: this.phone_number,
                country: this.country.code,
                role:this.role.code
            }



            if(
                this.full_name != '' &&
                this.phone_number != ''
            ){
                let apiURL = this.$store.state.apiURL;
                axios({ 
                    method: 'post',
                    url: '/api/users/try_create/',
                    baseURL: apiURL,
                    data: user
                })
                .then((res)=>{
                    if(res.data == true){
                        this.$store.dispatch('toggleLoading');
                        Swal.fire({
                            icon: 'success',
                            title: 'Congratulations!',
                            text: 'Redirecting you to Verification page',
                            timer:2000,
                            timerProgressBar: true,
                            showConfirmButton: false
                        })
                        setTimeout(()=>{
                            this.$router.push('/verify');
                        }, 2000);
                        
                    }else{
                        this.$store.dispatch('toggleLoading');
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Seems like your information is already linked to an account.',
                            footer: '<a href>Login?</a>'
                        })
                    }
                })
                .catch(err=>console.log(err))
            }
        }
    },
    components:{
        'v-select': vSelect,
        'loader-component': LoaderComponent
    }
}
</script>

