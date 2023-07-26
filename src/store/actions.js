import axiosClient from '../axiosClient'

export function searchMeals({commit}, keyword) {
    axiosClient.get(`/search.php?s=${keyword}`).then(({ data }) => {
        commit('setSearchedMeals', data.meals)

    })

}
export function mealsByLetter({commit}, letter) {
    axiosClient.get(`/search.php?f=${letter}`).then(({ data }) => {
        commit('setMealsByLetter', data.meals)

    })

}
export function mealsByIngredients({commit}, igd) {
    axiosClient.get(`/filter.php?i=${igd}`).then(({ data }) => {
        commit('setMealsByIngredients', data.meals)

    })

}