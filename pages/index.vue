<template>
    <template v-if="pending"><v-card-title title="Loading...." /></template>
    <template v-else-if="error"><v-card-title title="Error" /></template>
    <v-row v-else>
        <v-col v-for="post in data" >
            <post-card
                :actions="[{ label: 'Open', path: `/card/${post.id}` }, { label: 'More Posts by this user', path: `/card/user-id-${post.userId}` }]"
                :post="post" />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">




const { data, pending, error }
    = await useAsyncData<Post[]>(
        () => $fetch('https://jsonplaceholder.typicode.com/posts'),
    )
</script>