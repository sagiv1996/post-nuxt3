<template>
    <v-card title="Info about user" :subtitle="`See info about  ${user.username} user`">
        <v-card-text>
            <v-list-item density="compact" prepend-icon="mdi-account">
                <v-list-item-subtitle>{{ user.name }}</v-list-item-subtitle>
                <v-list-item-title>{{ user.username }}</v-list-item-title>
            </v-list-item>

            <v-list-item density="compact" prepend-icon="mdi-email">
                <v-list-item-action>
                    <v-btn append-icon="mdi-open-in-new" variant="text" :href="`mailto:${user.email}`">
                        {{ user.email }}
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
            <v-list-item density="compact" prepend-icon="mdi-phone">
                <v-list-item-action>
                    <v-btn append-icon="mdi-open-in-new" variant="text" :href="user.website.toLowerCase()">
                        {{ user.phone }}
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
            <v-list-item density="compact" prepend-icon="mdi-link">
                <v-list-item-action>
                    <v-btn append-icon="mdi-open-in-new" variant="text" href="https://vuetifyjs.com/en/api/v-btn/"
                        target="_blank">
                        {{ user.website }}
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-card-text>
    </v-card>
</template>
<script setup lang="ts">
interface Props {
    user: User
}
const { user } = defineProps<Props>()

</script>