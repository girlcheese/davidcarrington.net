<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <!-- in-page menu -->
    <dc-page-nav :current-page="'articles'"></dc-page-nav>
    <!-- page content -->
    <div
      class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"
    >
      <dc-heading>Articles & Talks</dc-heading>

      <p class="text-xl py-4 mt-4">
        I have written for various publications and spoken at many conferences
        and seminars. Some of the articles and talks are available here.
      </p>

      <ul>
        <li v-for="(item, index) in articles.list" :key="index">
          <dc-list-tile
            :title="item.title"
            :link="item.link"
            :description="`${item.description} (${getDate(item.date)})`"
          ></dc-list-tile>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DcPageNav from '~/components/DcPageNav'
import DcHeading from '~/components/DcHeading'
import DcListTile from '~/components/DcListTile'

import { MONTHS } from '~/constants'

export default {
  name: 'WorkIndex',
  components: {
    DcPageNav,
    DcHeading,
    DcListTile
  },
  computed: {
    ...mapState(['articles'])
  },
  methods: {
    getDate(datestring) {
      const dateSplit = datestring.split('-')
      const year = dateSplit[0]
      const month = dateSplit.length > 1 ? dateSplit[1] : null
      if (month) {
        return `${MONTHS[month - 1]} ${year}`
      } else {
        return year
      }
    }
  }
}
</script>

<style scoped>
p {
  @apply pt-4;
}
li {
  @apply pt-2;
}
</style>
