<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <!-- in-page menu -->
    <dc-page-nav :current-page="'work'"></dc-page-nav>
    <!-- page content -->
    <div
      class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"
    >
      <dc-heading>Mentoring/Staff Development</dc-heading>
      <p>I am or have been adviser and ‘mentor’ to: –</p>

      <ul>
        <li>
          The Chief Executive of a large national charity that provides social
          care services
        </li>
        <li>
          The Chief Executive of a national ‘second-tier’ membership
          organisation for local youth services
        </li>
        <li>
          The Finance Director of a housing association providing accommodation
          and support for homeless people in London
        </li>
        <li>The senior staff team of a national grant-making organisation</li>
        <li>
          The Chief Executives of two organisations (one national; one regional)
          working on behalf of social enterprises
        </li>
        <li>The Directors of four endowed charitable trusts/foundations</li>
        <li>
          The Chief Executive of an international NGO specialising in the
          development of mental health services
        </li>
        <li>
          The senior executive team of a charity running an appeal to set up a
          national centre
        </li>
        <li>
          The Chief Executive of a national organisation that promotes and
          supports social entrepreneurs
        </li>
        <li>
          The Director of Finance and Corporate Services of a lottery funds
          distributor
        </li>
        <li>
          The Chief Executive of a national charity working on environmental
          education and schools
        </li>
        <li>The Chief Executive of a venture philanthropy fund</li>
        <li>
          The Head of Ethical & Responsible Investment of an investment
          management company
        </li>
        <li>
          The Managing Director of a Europe-wide association of philanthropy
          funds
        </li>
        <li>The Managing Partner of a philanthropy advisory service</li>
        <li>
          The Chief Executive of an international NGO working with rural
          communities on the creation of income opportunities
        </li>
        <li>
          The Chief Executive of national organisation whose members are engaged
          in the regeneration of communities
        </li>
        <li>
          and have provided “first 100 days” assistance to the Chair of a
          non-departmental public body and to the Chief Executive of a new
          special fund for enhancing and extending the provision by voluntary
          organisations of publicly funded services.
        </li>
      </ul>
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

<style scoped>
p {
  @apply pt-4;
}
li {
  @apply pt-2 list-disc ml-6;
}
ul {
  @apply pb-4;
}
</style>
