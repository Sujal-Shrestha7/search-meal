import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/views/Home.vue'
import MealsByLetter from '../src/views/MealsByLetter.vue'
import MealsByName from '../src/views/MealsByName.vue'
import MealsDetails from '../src/views/MealsDetails.vue'
import MealsByIngredient from '../src/views/MealsByIngredient.vue'
import DefaultLayout from '../src/components/DefaultLayout.vue'
import GuestLayout from '../src/components/GuestLayout.vue'
import Ingredient from '../src/views/Ingredients.vue'

const routes = [{
    path: '/',
    component: DefaultLayout,
    children: [{
        path: '/',
        name: 'home',
        component: Home,

    },
        {
    path: "/by-letter/:letter?",
    name: "byLetter",
    component: MealsByLetter
}
,
{
    path: "/by-name/:name?",
    name: "byName",
    component: MealsByName
}
,
{
    path: "/by-ingredient/:ingredient?",
    name: "byIngredient",
    component: MealsByIngredient
},
{
    path: "/ingredients",
    name: "ingredients",
    component: Ingredient
},
{
    path: '/meal/:id?',
    name: 'mealDetails',
    component: MealsDetails
}


    ]
},

{
    path: '/guest',
    name: 'login',
    component: GuestLayout,
}
]


const router = new createRouter({
    history: createWebHistory(),
    routes
    
})

export default router;