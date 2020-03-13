<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <h1 class="text-4xl">Welcome</h1>
    <dc-latest-talks></dc-latest-talks>
  </div>
</template>

<script>
// import DcPageNav from '~/components/DcPageNav'
// import DcHeading from '~/components/DcHeading'
import DcLatestTalks from '~/components/DcLatestTalks'
export default {
  components: {
    // DcPageNav,
    // DcHeading,
    DcLatestTalks
  },
  data() {
    return {
      title:
        'David Carrington - Independent Consultant to the Charity Sector, Mentor and Chief Executive'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
