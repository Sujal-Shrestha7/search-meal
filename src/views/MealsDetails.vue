<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-f p-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMealThumb" class="max-w-full">

        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category: </strong>{{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags: </strong>{{ meal.strTags }}
            </div>
        </div>
        
         <div>

                    {{ meal.strInstructions }}
                </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strIngredient${ind+1}`]">
                          {{ ind+1 }}. {{ meal[`strIngredient${ind + 1}`] }}

                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                <ul>
                        <template v-for="(el, ind) of new Array(20)">
                            <li v-if="meal[`strMeasure${ind + 1}`]">
                               {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}

                            </li>
                        
                        </template>
                    </ul>
            </div>
           

            <div class="mt-4" justify-between>
                <YoutubeButton :href="meal.strYoutube">Go to YouTube</YoutubeButton>
                                        <a :href="meal.strSource" class="rounded border border-purple-600 px-3 py-2 hover:bg-purple-500 hover:text-white transition-color mx-3">View</a>

            </div>

        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import {useRoute} from 'vue-router'
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';
// import MealsByName from './MealsByName.vue';
const meal =  ref({})
const route = useRoute()

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
        meal.value = data.meals[0]
        
    })


    }
)

</script>