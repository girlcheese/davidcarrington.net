<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <!-- in-page menu -->
    <dc-page-nav :current-page="'work'"></dc-page-nav>
    <!-- page content -->
    <div
      class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"
    >
      <dc-heading>Speaking Engagements</dc-heading>

      <dc-filtered-list
        :filters="filters"
        :source-data="speaking"
      ></dc-filtered-list>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DcHeading from '~/components/DcHeading'
import DcPageNav from '~/components/DcPageNav'
// import DcSpeaking from '~/components/DcSpeaking'
import DcFilteredList from '~/components/DcFilteredList'

export default {
  name: 'SpeakingEngagements',
  components: {
    DcHeading,
    DcPageNav,
    // DcSpeaking,
    DcFilteredList
  },
  data() {
    return {
      filters: [
        {
          label: '2001-2005',
          dates: {
            start: 2001,
            end: 2005
          }
        },
        {
          label: '2006-2010',
          dates: {
            start: 2006,
            end: 2010
          }
        },
        {
          label: '2011-2020',
          dates: {
            start: 2011
          }
        }
      ]
    }
  },
  computed: {
    ...mapState(['speaking'])
  }
}
</script>

<style scoped></style>
