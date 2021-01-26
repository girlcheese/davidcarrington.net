<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <!-- in-page menu -->
    <dc-page-nav :current-page="'work'"></dc-page-nav>
    <!-- page content -->
    <div
      class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"
    >
      <dc-heading>Consultancy projects</dc-heading>

      <ul>
        <li v-for="(item, index) in consultancy.list" :key="index" class="pt-4">
          <dc-list-tile
            :title="item.title"
            :link="item.link"
            :description="`${item.description} (${getDate(item.dates)})`"
          ></dc-list-tile>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DcListTile from '../../components/DcListTile'
import DcHeading from '~/components/DcHeading'
import DcPageNav from '~/components/DcPageNav'
import { MONTHS } from '~/constants'

export default {
  name: 'ConsultancyProjects',
  components: {
    DcHeading,
    DcPageNav,
    DcListTile
  },
  data() {
    return {
      title: 'Consultancy Projects - David Carrington'
    }
  },
  computed: {
    ...mapState(['consultancy'])
  },
  methods: {
    getDate(dates) {
      if (dates.end) {
        if (dates.end === dates.start) {
          return this.formatDate(dates.start)
        } else {
          return `${this.formatDate(dates.start)} to ${this.formatDate(
            dates.end
          )}`
        }
      } else {
        return `from ${this.formatDate(dates.start)}`
      }
    },
    formatDate(dateString) {
      const dateSplit = dateString.split('-')
      const year = dateSplit[0]
      const month = dateSplit.length > 1 ? dateSplit[1] : null
      if (month) {
        return `${MONTHS[month - 1]} ${year}`
      } else {
        return year
      }
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style scoped></style>
