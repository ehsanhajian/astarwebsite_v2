<template>
  <div
    v-if="!gdpr_accept"
    class="bg-white bg-opacity-95 text-space-gray-dark bottom-0 left-0 w-full fixed z-50 border-t border-gray-300 pt-8 sm:pt-12 pb-12"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 sm:flex items-center">
      <div class="sm:mr-4">
        Our website uses cookies to enhance site navigation and analyze site
        usage. Please let us know you agree to all of our cookies. You can find
        out more on our
        <a
          href="https://docs.google.com/document/d/1jEbhRfh292TahRMRdeN4z-8MYNU27dCS_vVopV6xQgk/edit?usp=sharing"
          target="_blank"
          rel="noopener"
          class="text-space-blue hover:underline hover:text-space-blue-lighter transition whitespace-nowrap"
        >
          Privacy Policy
        </a>
        page.
      </div>
      <div class="text-center mt-4 sm:mt-0">
        <Button class="whitespace-nowrap" size="lg" @click="acceptCookies">
          Accept Cookies
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCookies } from "vue3-cookies";
import { ref } from "vue";

const { cookies } = useCookies();
const gdpr_accept = ref(false);

if (cookies.get("gdpr") !== null) {
  gdpr_accept.value = true;
}

const acceptCookies = () => {
  cookies.set("gdpr", "accept", "1y");
  gdpr_accept.value = true;
};
</script>
