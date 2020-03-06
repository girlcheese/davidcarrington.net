<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <!-- in-page menu -->
    <div class="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
      <p class="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
      <div class="block lg:hidden sticky inset-0">
        <button
          id="menu-toggle"
          class="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-purple-500 appearance-none focus:outline-none"
        >
          <svg
            class="fill-current h-3 float-right"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
      </div>
      <div
        class="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
        style="top:5em;"
        id="menu-content"
      >
        <ul class="list-reset">
          <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
            <a
              href="#"
              class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:border-purple-500 lg:hover:border-purple-500"
            >
              <span class="pb-1 md:pb-0 text-sm text-gray-900 font-bold"
                >Home</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- page content -->
    <div
      class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"
    >
      <dc-heading>Articles & Talks</dc-heading>

      <ul>
        <li v-for="(item, index) in articles.list" :key="index">
          <strong>{{ item.title }}</strong> - {{ item.description }} ({{
            getDate(item.date)
          }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DcHeading from '~/components/DcHeading'
import { MONTHS } from '~/constants'

export default {
  name: 'WorkIndex',
  components: {
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
      //
      // if (month) {
      //   return `${MONTHS[month - 1]} ${year}`
      // } else {
      //   return year
      // }
    }
  }
}
</script>

<style scoped></style>
