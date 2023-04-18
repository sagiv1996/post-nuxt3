<template>
    <v-card>
        <v-card-title> {{ post.title }}</v-card-title>
        <v-card-text>
            {{ post.body }}
        </v-card-text>
        <v-card-actions>
            <v-btn :to="`${action.path}`">{{ action.label }}</v-btn>
        </v-card-actions>

    </v-card>
</template>
<script setup lang="ts">

interface Props {
    post: Post
    action: {
        label: String,
        path: String
    }
}
const { post } = defineProps<Props>()
</script>