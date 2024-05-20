<script setup>
import { onMounted, ref} from 'vue';
import { useRouter } from 'vue-router'

import ArtistCard from '@/components/ArtistCard.vue';
import ArtistDetail from '@/components/ArtistDetail.vue';
import { getFollowedArtists } from '@/services/spotify';

const token = ref(null);
const router = useRouter();

onMounted(() => {
  token.value = localStorage.getItem('spotifyToken');
  if (!token.value) {
    router.push('/login');
  }
  fetchArtists();
});

const artists = ref([]);
const currentArtistIndex = ref(0);
const currentArtist = ref(null);
const showDetail = ref(false);

const fetchArtists = async () => {
  const token = localStorage.getItem('spotifyToken');
  if (!token) {
    router.push('/login');
    return;
  }
  artists.value = await getFollowedArtists();
  currentArtist.value = artists.value[0];
};

const nextArtist = () => {
  if (currentArtistIndex.value < artists.value.length - 1) {
    currentArtistIndex.value++;
    currentArtist.value = artists.value[currentArtistIndex.value];
  }
};

const unfollowArtist = async () => {
  if (currentArtist.value) {
    await unfollowArtist(currentArtist.value.id);
    artists.value.splice(currentArtistIndex.value, 1);
    nextArtist();
  }
};

const showDetails = () => {
  showDetail.value = true;
};

const closeDetails = () => {
  showDetail.value = false;
};
</script>

<template>
  <main>
    <ArtistCard
      v-if="currentArtist"
      :artist="currentArtist"
      @next="nextArtist"
      @unfollow="unfollowArtist"
      @info="showDetails"
    />
    <ArtistDetail
      v-if="showDetail"
      :artist="currentArtist"
      @close="closeDetails"
    />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
