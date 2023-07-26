<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
                <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5 text-orange-500 font-semibold text-32">
                    Home
                </router-link>
                <div class="flex item-center gap-1 px-5">
                    <router-link :to="{ name: 'byIngredient' }" class="inline-flex transition-colors px-2 py-5 h-full hover:bg-purple-100">
                        Search Meals
                    </router-link>
                    <router-link :to="{ name: 'byLetter' }" class="inline-flex transition-colors px-2 py-5 h-full hover:bg-purple-100">
                        Meals by Letter
                    </router-link>
                    <router-link :to="{ name: 'byName' }" class="inline-flex transition-colors px-2 py-5 h-full hover:bg-purple-100">
                        Meals by Name
                    </router-link>
                    <router-link :to="{ name: 'ingredients' }" class="inline-flex transition-colors px-2 py-5 h-full hover:bg-purple-100">
                        Ingredients
                    </router-link>
                </div>
            </header>
</template>

<script setup>

</script>