<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <!-- in-page menu -->
    <dc-page-nav :current-page="'work'"></dc-page-nav>
    <!-- page content -->
    <div
      class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"
    >
      <dc-heading>My Work</dc-heading>
      <p>I work in the UK and internationally with:</p>
      <ul>
        <li>
          Funder organisations in the charitable, statutory and corporate
          sectors
        </li>
        <li>
          Charities, social enterprises and other ‘not for profit’ and community
          organisations
        </li>
        <li>
          Individual social investors, philanthropists and organisations wishing
          to encourage new philanthropic and social impact investing initiatives
        </li>
        <li>Social investment, charity and philanthropy advisers</li>
      </ul>
      <p>On:</p>

      <ul>
        <li>
          The review and evaluation of existing strategies, governance,
          programmes and practice
        </li>
        <li>The development and implementation of new policies and activity</li>
        <li>
          The introduction of new ways – through, for example, Social Investment
          – of financing voluntary organisations, social enterprises,
          neighbourhood renewal and other social purpose organisations
        </li>
        <li>
          The promotion of personal philanthropy and the support of individual
          philanthropists
        </li>
        <li>
          The selection and induction of senior staff, providing an independent
          contribution to the recruitment process
        </li>
        <li>
          The personal and professional development of individual Board Chairs,
          Chief Executives and other senior staff to help them address the
          challenges of leadership, to clarify options and to resolve problems.
        </li>
      </ul>

      <p>
        In all my work, I strive to help organisations strengthen themselves by
        diversifying the ways they use financial and other resources and by
        enhancing their standards of governance and management practice.
      </p>
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
  @apply pt-2;
}
</style>
