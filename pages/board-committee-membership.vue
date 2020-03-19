<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <!-- in-page menu -->
    <dc-page-nav :current-page="'articles'"></dc-page-nav>
    <!-- page content -->
    <div
      class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"
    >
      <dc-heading>Board & Committee Membership</dc-heading>
      <h3 class="font-bold text-xl my-3">
        Board and Committee Membership 2010 to present
      </h3>

      <ul>
        <li v-for="(item, index) in first" :key="index">
          <dc-list-tile
            :title="item.title"
            :link="item.link"
            :description="`${item.description} (${getDate(item.dates)})`"
          ></dc-list-tile>
        </li>
      </ul>

      <h3 class="font-bold text-xl my-3">
        Board and Committee Memberships before 2010
      </h3>

      <ul>
        <li v-for="(item, index) in second" :key="index">
          <dc-list-tile
            :title="item.title"
            :link="'#'"
            :description="`${item.description} (${getDate(item.dates)})`"
          ></dc-list-tile>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DcHeading from '~/components/DcHeading'
import DcPageNav from '~/components/DcPageNav'
import DcListTile from '~/components/DcListTile'

export default {
  components: {
    DcListTile,
    DcPageNav,
    DcHeading
  },
  computed: {
    first() {
      return this.$store.state.boards.list
        .filter((el) => {
          return parseInt(el.dates.start, 10) >= 2010
        })
        .sort((a, b) => {
          return a.title.localeCompare(b.title)
        })
    },
    second() {
      return this.$store.state.boards.list
        .filter((el) => {
          return parseInt(el.dates.start, 10) < 2010
        })
        .sort((a, b) => {
          return a.title.localeCompare(b.title)
        })
    },
    ...mapState(['boards'])
  },
  methods: {
    getDate(dates) {
      if (dates.end) {
        if (dates.end === dates.start) {
          return dates.start
        } else {
          return `${dates.start} to ${dates.end}`
        }
      } else {
        return `from ${dates.start}`
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
ul {
  @apply pb-4;
}
</style>
