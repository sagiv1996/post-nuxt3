<template>
    <v-card>
        <v-card-title> {{ post.title }}</v-card-title>

        <v-card-text>
            {{ post.body }}
        </v-card-text>
    </v-card>
</template>
<script setup lang="ts">

interface Props {
    post: Post

}
const { post } = defineProps<Props>()
</script>