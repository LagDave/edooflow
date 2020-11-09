import HomeComponent from "../components/HomeComponent.vue";
import RegisterComponent from "../components/registration/RegisterComponent.vue";
import VerifyComponent from "../components/VerifyComponent.vue";



export default [
    {path: '/', component: HomeComponent, name: 'home'},
    {path: '/register', component: RegisterComponent, name: 'register'},
    {path: '/verify', component: VerifyComponent, name: 'verify'},

]