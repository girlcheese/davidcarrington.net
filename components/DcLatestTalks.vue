<template>
  <div class="latest-talks container">
    <h2 class="text-2xl">Latest Articles</h2>
    <div v-for="(item, i) in latest" :key="i" class="pb-2">
      <dc-list-tile
        :title="item.title"
        :link="item.link"
        :description="item.description"
      ></dc-list-tile>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DcListTile from '~/components/DcListTile'
export default {
  name: 'DcLatestTalks',
  components: {
    DcListTile
  },
  computed: {
    ...mapState(['articles']),
    ...mapGetters({
      latest: 'articles/sortLatest'
    })
  }
}
</script>

<style scoped></style>
