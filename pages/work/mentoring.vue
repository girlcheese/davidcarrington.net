<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <!-- in-page menu -->
    <dc-page-nav :current-page="'work'"></dc-page-nav>
    <!-- page content -->
    <div
      class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"
    >
      <dc-heading>Mentoring</dc-heading>
    </div>
  </div>
</template>

<script>
import DcPageNav from '~/components/DcPageNav'
import DcHeading from '~/components/DcHeading'
export default {
  components: {
    DcPageNav,
    DcHeading
  }
}
</script>

<style scoped></style>
