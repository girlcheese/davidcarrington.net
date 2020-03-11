<template>
  <div>
    <a v-if="link" :href="getLink(link)"
      ><strong>{{ title }}</strong></a
    >
    <strong v-else>{{ title }}</strong>
    - {{ description }}
  </div>
</template>

<script>
import { DOWNLOADS_BASE_URL } from '~/constants'

export default {
  name: 'DcListTile',
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  },
  methods: {
    getLink(doc) {
      console.log(typeof doc, doc)
      if (!doc) {
        return 'null'
      }
      if (doc.indexOf('://') > 0) {
        return doc
      }
      return [DOWNLOADS_BASE_URL, doc].join('/')
    }
  }
}
</script>

<style scoped></style>
