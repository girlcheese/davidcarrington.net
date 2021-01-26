<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <!-- in-page menu -->
    <dc-page-nav :current-page="'work'"></dc-page-nav>
    <!-- page content -->
    <div
      class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"
    >
      <dc-heading>Get in Touch</dc-heading>
      <form
        name="contact-form"
        action="/contact/success"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="pt-4"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <div class="mb-4 relative">
          <input
            id="contactName"
            class="input"
            type="text"
            autofocus
            @keyup="toggleInputContainer"
          />
          <label
            for="contactName"
            class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
            >Name</label
          >
        </div>
        <div class="mb-4 relative">
          <input
            id="email"
            class="input"
            type="text"
            autofocus
            @keyup="toggleInputContainer"
            @change="validateEmail"
          />
          <label
            for="email"
            class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
            >Email Address</label
          >
        </div>
        <div class="mb-4 relative">
          <textarea
            id="contactMessage"
            class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
            type="text"
            autofocus
            @keyup="toggleInputContainer"
          />
          <label
            for="contactMessage"
            class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
            >Message</label
          >
        </div>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import DcHeading from '~/components/DcHeading'
import DcPageNav from '~/components/DcPageNav'
export default {
  components: {
    DcHeading,
    DcPageNav
  },
  methods: {
    toggleInputContainer(event) {
      if (event.target.value !== '') {
        event.target.classList.add('filled')
      } else {
        event.target.classList.remove('filled')
      }
    },
    validateEmail(event) {}
  }
}
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.input {
  transition: border 0.2s ease-in-out;
  min-width: 280px;
}

.input {
  @apply border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2;
  &:focus {
    @apply border-indigo-600 outline-none;
  }
  &:active {
    @apply outline-none border-indigo-600;
  }
}

.input:focus + .label,
.input:active + .label,
.input.filled + .label {
  font-size: 0.75rem;
  transition: all 0.2s ease-out;
  top: -0.1rem;
  color: #667eea;
}
.label {
  transition: all 0.2s ease-out;
  top: 0.4rem;
  left: 0;
}
</style>
