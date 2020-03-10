<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <!-- in-page menu -->
    <dc-page-nav :current-page="'articles'"></dc-page-nav>
    <!-- page content -->
    <div
      class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"
    >
      <dc-heading>Reports</dc-heading>

      <p class="text-2xl">
        Copies of seven reports I have been commissioned to produce can be
        downloaded from here:
      </p>

      <ul>
        <li v-for="(item, index) in articles.reports" :key="index">
          <a v-if="item.link" :href="getLink(item.link)"
            ><strong>{{ item.title }}</strong></a
          >
          <strong v-else>{{ item.title }}</strong>
          - {{ item.description }} ({{ getDate(item.date) }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DcPageNav from '../../components/DcPageNav'
import DcHeading from '~/components/DcHeading'
import { MONTHS, DOWNLOADS_BASE_URL } from '~/constants'

export default {
  name: 'Reports',
  components: {
    DcPageNav,
    DcHeading
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
    },
    getLink(doc) {
      if (doc.indexOf('://') > 0) {
        return doc
      }
      return [DOWNLOADS_BASE_URL, doc].join('/')
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
