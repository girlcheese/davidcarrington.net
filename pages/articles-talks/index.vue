<template>
  <div>
    <dc-heading>Articles & Talks</dc-heading>

    <ul>
      <li v-for="(item, index) in articles.list" :key="index">
        <strong>{{ item.title }}</strong> - {{ item.description }} ({{
          getDate(item.date)
        }})
      </li>
    </ul>
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
