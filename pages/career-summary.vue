<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <!-- in-page menu -->
    <dc-page-nav :current-page="'career'"></dc-page-nav>
    <!-- page content -->
    <div
      class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"
    >
      <dc-heading>Career Summary</dc-heading>
      <div v-for="(item, i) in items" :key="i" class="pt-4">
        <h2 class="text-lg font-semibold">{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>

      <h2></h2>
      <p></p>
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
  },
  data() {
    return {
      items: [
        {
          title: 'PPP Foundation (renamed The Health Foundation 2003)',
          description:
            'Chief Executive (1998-2001) – setting up a new charity, with an\n' +
            '        endowment of £540 million, to make grants annually of £20 million to\n' +
            '        support healthcare and public health projects.'
        },
        {
          title: 'The Baring Foundation',
          description:
            'Director (1992-1998) – managing a grant making trust supporting work\n' +
            '        (£16 million in 1994) across the charitable sector, including education,\n' +
            '        welfare, health, the environment and the arts; and rebuilding the\n' +
            '        Foundation after the loss of its main source of income in 1995, while\n' +
            '        also securing contracts to assist the start-up of other grant makers,\n' +
            '        such as Bridge House Estates (now renamed as The City Bridge Trust).'
        },
        {
          title: 'Housing Associations Charitable Trust',
          description: 'Director (1988-1991)'
        },
        {
          title: 'Stonham Housing Association',
          description: 'Housing Services Manager (1984-1988'
        },
        {
          title: 'Self-employed',
          description:
            'Consultancy (1982-1984) – contracts with NCVO, CCETSW, the Local\n' +
            '        Government Association among others'
        },
        {
          title: 'NACRO',
          description:
            'Assistant Director (initially Assistant Training Organiser) (1972-1982)'
        },
        {
          title: 'London Borough of Lambeth',
          description: 'Social Worker (Unqualified) (1970-1972)'
        },
        {
          title: 'Northorpe Hall, Mirfield',
          description: 'Assistant Director (1968-1970)'
        }
      ]
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
