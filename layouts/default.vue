<template>
  <div @scroll="onScroll">
    <dc-navigation :offset="yOffset"></dc-navigation>
    <nuxt />
    <dc-footer></dc-footer>
  </div>
</template>
<script>
import { debounce } from 'lodash'
import DcNavigation from '~/components/DcNavigation'
import DcFooter from '~/components/DcFooter'

export default {
  components: {
    DcNavigation,
    DcFooter
  },
  data() {
    return {
      yOffset: null
    }
  },
  mounted() {
    window.addEventListener('scroll', debounce(this.onScroll))
  },
  destroyed() {
    window.removeEventListener('scroll', debounce(this.onScroll))
  },
  methods: {
    onScroll() {
      this.yOffset = window.scrollY
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'bg-gray-100 tracking-normal'
      }
    }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
a {
  color: brown;
}
</style>
