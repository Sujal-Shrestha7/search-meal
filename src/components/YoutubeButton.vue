<template>
                            <a 
                            :href="href" 
                            target="_blank" 
                            class="rounded border border-red-500 px-3 py-2 hover:bg-red-600 hover:text-white transition-color">YouTube</a>
                            

</template>

<script setup>

const props = defineProps({
    href: String
})

</script>