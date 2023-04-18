<template>
    <v-card>
        <v-card-title> {{ post.title }}</v-card-title>
        <v-card-text>
            {{ post.body }}
        </v-card-text>
        <v-card-actions>
            <v-btn v-for="(action, ind) in actions" :to="`${action.path}`" :key="ind">{{ action.label }}</v-btn>
        </v-card-actions>

    </v-card>
</template>
<script setup lang="ts">

interface Props {
    post: Post
    actions: postCardAction[]
}
const { post } = defineProps<Props>()
</script>