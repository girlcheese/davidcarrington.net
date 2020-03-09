<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <!-- in-page menu -->
    <dc-page-nav :current-page="'work'"></dc-page-nav>
    <!-- page content -->
    <div
      class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"
    >
      <dc-heading>Speaking Engagements</dc-heading>
      <ul>
        <li v-for="(item, index) in speaking.list" :key="index" class="pt-4">
          <dc-speaking :item="item"></dc-speaking>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DcHeading from '~/components/DcHeading'
import DcPageNav from '~/components/DcPageNav'
import DcSpeaking from '~/components/DcSpeaking'

export default {
  name: 'SpeakingEngagements',
  components: {
    DcHeading,
    DcPageNav,
    DcSpeaking
  },
  computed: {
    ...mapState(['speaking'])
  }
}
</script>

<style scoped></style>
