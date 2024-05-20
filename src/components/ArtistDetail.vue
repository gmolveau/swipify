<template>
    <div class="artist-detail">
        <h2>{{ props.artist.name }}</h2>
        <p>Top 5 Songs:</p>
        <ul>
            <li v-for="song in props.artist.topTracks" :key="song.id">{{ song.name }}</li>
        </ul>
        <button @click="$emit('close')">Close</button>
    </div>
</template>

<script setup>
const props = defineProps({
    artist: { type: Object, required: true }
})
</script>

<style scoped>
.artist-detail {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.artist-detail ul {
    list-style: none;
    padding: 0;
}

.artist-detail button {
    margin-top: 10px;
}
</style>
