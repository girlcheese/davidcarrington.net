<template>
  <div class="filtered-list">
    <div v-if="filters" class="filters mt-4">
      <ul class="flex">
        <li v-for="(item, i) in filters" :key="i" class="flex-1 mr-2">
          <a class="" :href="`#${item.dates.start}`" @click="setFilter(item)">{{
            item.label
          }}</a>
        </li>
      </ul>
    </div>
    <div class="list">
      <ul>
        <transition-group name="list">
          <li v-for="item in filteredList" :key="item" class="pt-4">
            <dc-speaking :item="item"></dc-speaking>
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
import DcSpeaking from '~/components/DcSpeaking'

export default {
  name: 'DcFilteredList',
  components: {
    DcSpeaking
  },
  props: {
    filters: {
      type: Array,
      default: null
    },
    sourceData: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      currentFilter: {
        type: Object,
        default: null
      }
    }
  },
  computed: {
    filteredList() {
      if (!this.currentFilter.dates) {
        return this.sourceData.list
      }
      return this.sourceData.list
        .filter((el) => {
          const myEnd = this.currentFilter.dates.end || new Date().getFullYear()
          return el.year >= this.currentFilter.dates.start && el.year <= myEnd
        })
        .sort((a, b) =>
          a.organisations[0].title.localeCompare(b.organisations[0].title)
        )
    }
  },
  methods: {
    setFilter(item) {
      this.currentFilter = item
      return false
    }
  }
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
}

.filters a {
  @apply block text-center border border-white rounded text-blue-500 py-1 px-3;
  &:hover {
    @apply border-gray-200 bg-gray-200;
  }
  &.active {
    @apply border-white rounded text-white py-2 px-4;
    &:hover {
      @apply border-gray-200 bg-gray-200;
    }
  }
}
</style>
