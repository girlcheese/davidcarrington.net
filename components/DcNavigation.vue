<template>
  <nav
    id="header"
    class="fixed w-full z-10 top-0 bg-white border-b border-gray-400"
  >
    <div
      class="w-full  mx-auto flex flex-wrap items-center justify-between mt-0 py-4"
    >
      <div class="pl-4 flex items-center">
        <div class="avatar mr-4"></div>
        <nuxt-link
          class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
          to="/"
        >
          David Carrington
        </nuxt-link>
      </div>
      <div class="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-purple-500 appearance-none focus:outline-none"
          @click="navToggle"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        id="nav-content"
        ref="mainNav"
        class="w-full flex-grow lg:flex lg:content-center lg:items-center lg:w-auto justify-end lg:block mt-2 lg:mt-0 z-20"
        :class="navHidden ? 'hidden' : null"
      >
        <ul v-if="navigation" class="list-reset lg:flex items-center">
          <li
            v-for="(item, i) in navigation.items"
            :key="i"
            class="mr-3 py-2 lg:py-0"
          >
            <nuxt-link
              :to="item.to"
              class="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
              >{{ item.name }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DcNavigation',
  components: {},
  data() {
    return {
      navHidden: true
    }
  },
  computed: {
    ...mapState(['navigation'])
  },
  methods: {
    navToggle() {
      this.navHidden = !this.navHidden
    }
  }
}
</script>

<style scoped>
.nuxt-link-active,
.nuxt-link-exact-active {
  color: brown;
}
.avatar {
  background-image: url('/images/avatar.jpg');
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
  width: 64px;
  height: 64px;
}
</style>
