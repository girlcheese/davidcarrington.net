<template>
  <div class="container">
    <dc-heading>Speaking Engagements</dc-heading>
    <ul>
      <li v-for="(item, index) in speaking.list" :key="index">
        <dc-speaking :item="item"></dc-speaking>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DcHeading from '~/components/DcHeading'
import DcSpeaking from '~/components/DcSpeaking'

export default {
  name: 'SpeakingEngagements',
  components: {
    DcHeading,
    DcSpeaking
  },
  computed: {
    ...mapState(['speaking'])
  }
}
</script>

<style scoped></style>
