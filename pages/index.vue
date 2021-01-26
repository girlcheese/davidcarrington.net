<template>
  <div>
    <div class="pt-40 pb-16 hero-header hero-header__bg block">
      <div class="container mx-auto px-6">
        <div class="flex mb-4">
          <div class="w-3/4">
            <p class="pr-3 md:text-xl lg:text-2xl">
              I have been an independent consultant since 2001, working on the
              development of social impact investing, on the promotion of
              personal philanthropy and on the funding and governance of
              charities and social enterprises. I am able to draw on 25 years
              experience of senior management positions in charities (the last
              13 as Chief Executive) and Board member experience with over a
              dozen organisations in the charity, social enterprise and public
              sectors.
            </p>
          </div>
          <div class="w-1/4">
            <figure>
              <img
                src="~/assets/images/CarringtonDavid.credit-Fergus-Burnett11.jpg"
                alt="David Carrington - Portrait"
              />
              <figcaption class="text-sm align-t">
                Photo Credit Fergus Burnett
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16"
    >
      <h1 class="text-4xl">Welcome</h1>
      <dc-latest-talks></dc-latest-talks>
    </div>
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

<style scoped lang="scss">
.hero-header {
  &__bg {
    background: linear-gradient(90deg, #004dea 0%, #78c9ff 100%);
  }
}
</style>
