<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
onMounted(() =>{
    const hash = window.location.hash;
    let token = null;

    if (hash) {
        token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
    }

    localStorage.setItem('spotifyToken', token);
    router.push('/');
})
</script>

<template>
    <div class="callback">
        <p>Loading...</p>
    </div>
</template>

<style scoped>
.callback {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
