<template>
    <div>
        <body class="--auth">
            <div class="l-login">
                <div class="--sides">
                    <a href="" class="l-login__logo">
                        <img src="https://i.pinimg.com/originals/60/b9/b1/60b9b11b28fde9cc13dd039ce8514076.png" alt="">
                    </a>
                    <h2 class="l-login__header">Verify your number</h2>
                    <p class="l-login__message">We sent you a code to verify<br>your phone number<br>
                        <span>Enter the OTP sent to +233 (024) 450 7794</span>
                    </p>
                </div>
                <div class="--sides">
                    <div class="l-login__main">
                        <div class="c-form --row --otp">
                            <input v-model='dig_one' type="text" class="form-control" required="" aria-required="true" aria-invalid="true">
                            <input v-model='dig_two' type="text" class="form-control" required="" aria-required="true" aria-invalid="true">
                            <input v-model='dig_three' type="text" class="form-control" required="" aria-required="true" aria-invalid="true">
                            <input v-model='dig_four' type="text" class="form-control" required="" aria-required="true" aria-invalid="true">
                        </div>
                        <div class="l-login__main--actions">
                            <p>I didn't receive the code!</p>
                            <p>
                                <a href="">Resend!</a>
                            </p>
                        </div>
                        <button @click='verify' class="l-login__main--button">Verify</button>
                    </div>
                    <div class="l-login__who">© 2020 Edooflow LLC.</div>
                </div>
            </div>
        </body>
    </div>
</template>
<script>
export default {
    
}
</script>