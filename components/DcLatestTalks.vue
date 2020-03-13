<template>
  <div class="latest-talks container">
    <h2 class="text-2xl">Latest Articles</h2>
    <div v-for="(item, i) in latest" :key="i" class="pb-2">
      <strong>{{ item.title }}</strong> - {{ item.description }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'DcLatestTalks',
  computed: {
    ...mapState(['articles']),
    ...mapGetters({
      latest: 'articles/sortLatest'
    })
  }
}
</script>

<style scoped></style>
