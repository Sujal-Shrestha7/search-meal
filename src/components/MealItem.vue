<template>
            <div class="bg-white shadow rounded-xl">
                <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
                    </router-link>
                    <div class="p-3">
                        <h3 class="font-bold">{{ meal.strMeal }}</h3>
                        <p class="m-4">
                            {{ meal.strInstructions?.length < 100 ? meal.strInstructions : meal.strInstructions?.substring(0, 100) + "...." }}
                        </p>
                        <div class="flex items-center justify-between">
                            <YoutubeButton :href="meal.strYoutube"/>
                            <a :href="meal.strSource" class="rounded border border-purple-600 px-3 py-2 hover:bg-purple-500 hover:text-white transition-color">View</a>
                        </div>
                        </div>
            </div>
</template>

<script setup>
import YoutubeButton from '../components/YoutubeButton.vue';

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})

</script>