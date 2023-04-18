<template>
    <template v-if="pending"><v-card-title title="Loading...." /></template>
    <template v-else-if="error"><v-card-title title="Error" /></template>
    <template v-else>
        <template v-for="post in data">
            <post-card :action="{ label: 'Open', path: `/card/${post.id}` }" :post="post" />
        </template>
    </template>
</template>

<script setup lang="ts">




const { data, pending, error }
    = await useAsyncData<Post[]>(
        () => $fetch('https://jsonplaceholder.typicode.com/posts'),
    )
</script>