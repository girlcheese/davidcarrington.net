<template>
  <nav class="flex items-center justify-between flex-wrap bg-red-100">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">David Carrington</span>
    </div>
    <div class="block lg:hidden">
      <!--      <button class="flex items-center px-3 py-2 border rounded">-->
      <!--        <svg-->
      <!--          class="fill-current h-3 w-3"-->
      <!--          viewBox="0 0 20 20"-->
      <!--          xmlns="http://www.w3.org/2000/svg"-->
      <!--        >-->
      <!--          <title>Menu</title>-->
      <!--          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />-->
      <!--        </svg>-->
      <!--      </button>-->
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <ul class="flex">
          <li
            v-for="(item, i) in items"
            :key="i"
            class="relative hover:bg-blue-800"
            :class="item.subNav ? 'group' : ''"
          >
            <nuxt-link
              :to="item.to"
              class="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              {{ item.name }}
            </nuxt-link>
            <ul
              v-if="item.subNav"
              class="absolute left-0 top-0 mt-5 p-2 z-10 hidden group-hover:block"
            >
              <li
                v-for="(subitem, j) in item.subNav"
                :key="j"
                class="whitespace-no-wrap"
              >
                <nuxt-link :to="subitem.to">{{ subitem.name }} </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'DcNavigation',
  components: {},
  props: {
    items: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>
/*.hoverable {*/
/*  position: static;*/
/*}*/

/*.hoverable > a:after {*/
/*  content: '\25BC';*/
/*  font-size: 10px;*/
/*  padding-left: 6px;*/
/*  position: relative;*/
/*  top: -1px;*/
/*}*/

/*.hoverable:hover .mega-menu {*/
/*  display: block;*/
/*}*/
/*.group:hover .group-hover\:block {*/
/*  display: block !important;*/
/*}*/
</style>
