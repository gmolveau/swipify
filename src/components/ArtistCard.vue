<template>
    <div class="artist-card">
        <img :src="props.artist.images[0]?.url" alt="artist image">
        <h3>{{ props.artist.name }}</h3>
        <button @click="$emit('next')">Next</button>
        <button @click="$emit('unfollow')">Unfollow</button>
        <button @click="$emit('info')">Info</button>
    </div>
</template>

<script setup>
const props = defineProps({
    artist: { type: Object, required: true }
})
</script>

<style scoped>
.artist-card {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.artist-card img {
    width: 150px;
    height: 150px;
    object-fit: cover;
}

.artist-card button {
    margin: 5px;
}
</style>
