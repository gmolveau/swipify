<script setup>
import { computed } from 'vue';
import { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPES } from '@/config';

const loginUrl = computed(() => {
    const scopes = SCOPES.join('%20');
    return `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scopes}`;
});
</script>

<template>
    <div class="login">
        <a :href="loginUrl">Login to Spotify</a>
    </div>
</template>

<style scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
