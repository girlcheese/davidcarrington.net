<template>
  <span>
    <span
      v-for="(org, index) in item.organisations"
      :key="index"
      class="organisation"
    >
      <a v-if="org.link" :href="org.link" class="organisation__title">{{
        org.title
      }}</a>
      <span v-else class="organisation__title">{{ org.title }}</span
      ><span v-if="index < item.organisations.length - 2">, </span>
      <span v-else-if="index === item.organisations.length - 2"> and </span>
    </span>
    <span class="description"
      >- {{ item.description }} ({{ getDate(item.year, item.month) }})</span
    >
  </span>
</template>

<script>
import { MONTHS } from '~/constants'
export default {
  name: 'DcSpeaking',
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  methods: {
    getDate(year, month) {
      if (year && month) {
        return `${MONTHS[month - 1]} ${year}`
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
.organisation {
  &__title {
    font-weight: 700;
  }
}
</style>
