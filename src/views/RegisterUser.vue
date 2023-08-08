<template>
    <div class="flex justify-center h-[100vh] w-[100vh] bg-blue-600 items-center">
       <div class="rounded block p-8 bg-white border-black justify-center">
           <input 
           type="text" 
           placeholder="first_name" 
           v-model="first_name"
           class="p-2 block mb-2 mt-5 rounded border focus:outline-none focus:border-blue-500 transition-all duration-300">
      
           <input 
           type="text" 
           placeholder="last_name" 
           v-model="last_name"
           class="p-2 block mb-2 border rounded focus:outline-blue-600 focus:border-blue-600 transition-all duration-300">
      
           <input 
           type="text" 
           placeholder="username" 
           v-model="username"
           class="p-2 mb-2 block border rounded focus:outline-none focus:border-blue-500 transition-all duration-300">
      
           <input 
           type="text" 
           placeholder="Password" 
           v-model="password"
           class="p-2 mb-2 block border rounded focus:outline-none focus:border-blue-500 transition-all duration-300">
      
           <input 
           type="email" 
           placeholder="email" 
           v-model="email"
           class="p-2 mb-2 block border rounded focus:outline-none focus:border-blue-500 transition-all duration-300">
          
      
           <input 
           type="text" 
           placeholder="Phone" 
           v-model="phone"
           class="p-2 mb-2 block border rounded focus:outline-none focus:border-blue-500 transition-all duration-300">
          
      
           <input 
           type="text" 
           placeholder="AltPhone" 
           v-model="altPhone"
           class="p-2 mb-2 block border rounded focus:outline-none focus:border-blue-500 transition-all duration-300">
          
      
           <input 
           type="text" 
           placeholder="slug" 
           v-model="slug"
           class="p-2 mb-2 block border rounded focus:outline-none focus:border-blue-500 transition-all duration-300">
          
        <button @click="performRegister" class="p-2 rounded bg-blue-400 mt-3 items-center justify-center text-white">Register</button>

        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const API_END_POINT = 'http://192.168.1.188:8080/auth/register'

const first_name = ref([])
const last_name = ref([])
const username = ref('')
const password = ref('')
const email = ref('')
const phone = ref('')
const altPhone = ref('')
const slug = ref('')

async function register(first_nameValue, last_nameValue, usernameValue, passwordValue, emailValue, phoneValue, altPhoneValue, slugValue){
    debugger
      try {
        const response = await axios.post(API_END_POINT, {
            first_name: first_nameValue,
            last_name: last_nameValue,
            user_name: usernameValue,
            password: passwordValue,
            email:emailValue,
            phone: phoneValue,
            altPhone: altPhoneValue,
            slug: slugValue
        })
    return response.data
    }catch(error){
            console.log("errorr occoured !!!! ", error)
        }

}


async function performRegister(){
    const first_nameValue = first_name.value
    const last_nameValue = last_name.value
    const usernameValue = username.value
    const passwordValue = password.value
    const emailValue = email.value
    const phoneValue = phone.value
    const altPhoneValue = altPhone.value
    const slugValue = slug.value

    try {
         const response = await register(first_nameValue, last_nameValue, usernameValue, passwordValue, emailValue, phoneValue, altPhoneValue, slugValue)
        console.log("Register applied !!!")
        console.log(response + " registereeeeeed")
    } catch (error) {
        console.log("Registration Failed: " + error)
    }

}
</script>

