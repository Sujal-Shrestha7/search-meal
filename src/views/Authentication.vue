<template>
<div class="flex justify-center h-[100vh] w-[100vh] bg-blue-600 items-center">
   <div class="rounded block p-8 bg-white border-black justify-center">
       <input 
       type="text" 
       placeholder="Username" 
       v-model="username"
       class="p-2 block mb-2 mt-5 rounded border focus:outline-none focus:border-blue-500 transition-all duration-300">
      
       <input 
       type="password" 
       placeholder="Password" 
       v-model="password"
       class="p-2 block border rounded focus:outline-blue-600 focus:border-blue-600 transition-all duration-300">
       <button @click="performLogin" class="p-2 rounded bg-blue-400 border-orange-700 mt-7 items-center justify-center text-white">Login</button>
       <div class="mt-7">
        <p class="text-black inline">Do not have account? &nbsp;</p>
           <router-link :to="{name: 'signup'}" class="text-blue-500  underline">
            SignUp
           </router-link>
        
       </div>
    </div>


</div>
</template>

 
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import router from '../../router'


const axiosInstance = axios.create({

    baseURL: "http://192.168.1.188:8080/",
}
)

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    }
)

const username = ref('')
const password = ref('')

async function login(username, password) {
    console.log(username,password)
    try{
        const response = await axiosInstance.post('auth/login', {
            user_name: username,
            password: password,
            slug: "tenant5"
        })
        const jwtToken = response.data.message.token
        console.log(jwtToken)
        localStorage.setItem('token', jwtToken)
        return jwtToken
    }
catch(error){
    console.log("Error Occurred: " + error)
    console.log(username + ' ' + password + 'login error')
            }
}

async function performLogin(){
    const usernameValue = username.value
    const passwordValue = password.value

    try{    
        const jwtToken = await login(usernameValue, passwordValue)
        router.push('/')
        console.log("JWT Token: ", jwtToken)
    }catch(error){
    }
        // router.push('/ingredients')
   
}

debugger
const response = axiosInstance.get('/menu')
console.log(response)


</script>