<template>
  <div>
    <dc-navigation :items="navigation"></dc-navigation>
    <nuxt />
    <dc-footer></dc-footer>
  </div>
</template>
<script>
import DcNavigation from '~/components/DcNavigation'
import DcFooter from '~/components/DcFooter'

export default {
  components: {
    DcNavigation,
    DcFooter
  },
  data() {
    return {
      navigation: {
        work: {
          name: 'Work',
          to: '/work',
          subNav: [
            {
              name: 'Consultancy 2007-2020',
              to: '/work/consultancy-projects'
            },
            {
              name: 'Consultancy 2001-2006',
              to: '/work/consultancy-projects-2001-2006'
            },
            {
              name: 'Speaking Engagements 2007-2020',
              to: '/work/speaking-engagements'
            },
            {
              name: 'Speaking Engagements 2001-2006',
              to: '/work/speaking-engagements-2001-2006'
            },
            {
              name: 'Mentor/Staff Development',
              to: '/work/mentoring'
            },
            {
              name: 'Joint Venture',
              to: '/work/joint-venture'
            }
          ]
        },
        boards: {
          name: 'Boards & Committees',
          to: '/board-committee-membership/'
        },
        articles: {
          name: 'Articles & Talks',
          to: '/articles-talks',
          subNav: [
            {
              name: 'Commissioned Reports',
              to: '/articles-talks/reports'
            }
          ]
        },
        career: {
          name: 'Career',
          to: '/career-summary'
        },
        contact: {
          name: 'Contact',
          to: '/contact'
        }
      }
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'bg-gray-100 tracking-wider tracking-normal'
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
