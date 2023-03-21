<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative">
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="~/assets/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
        />
        <div
          class="min-h-[50vh] sm:min-h-[60vh] flex items-center justify-start"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div class="text-center">
              <h1
                class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow"
              >
                Wasm Launch Day
              </h1>
              <p class="sm:text-xl lg:text-2xl">April 6th, 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="mb-24">
          <div
            class="border border-gray-500 rounded-3xl overflow-hidden"
            data-tf-widget="y15vHT0R"
            data-tf-opacity="100"
            data-tf-iframe-props="title=Wasm Launch Day"
            data-tf-transitive-search-params
            data-tf-medium="snippet"
            style="width: 100%; height: 430px"
          />
          <p class="text-xs mt-4 text-gray-400">
            Astar Network may use the contact information you provide to us to
            contact you about our products and services. By clicking “submit”
            above you consent to receive such communications. You may
            unsubscribe from these communications at any time. For information
            on how to unsubscribe, as well as our privacy practices and
            commitment to protecting your privacy, please review our
            <NuxtLink
              class="text-space-cyan hover:text-space-cyan-lighter"
              to="https://docs.google.com/document/d/1jEbhRfh292TahRMRdeN4z-8MYNU27dCS_vVopV6xQgk/edit?usp=sharing"
              target="_blank"
              >Privacy Policy</NuxtLink
            >.
          </p>
        </div>

        <div class="space-y-12 leading-loose text-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  script: [{ src: "//embed.typeform.com/next/embed.js" }],
});

definePageMeta({
  layout: false,
  title: "Wasm Launch Day",
  slug: "wasm-launch-day",
  description: "Get in touch with the Astar Network team",
});
</script>

<style lang="postcss" scoped>
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}
.btn {
  @apply shadow font-medium transition-all inline-block hover:cursor-pointer text-white rounded-xl px-4 py-2;
  background: linear-gradient(
    120deg,
    #e6007a -5.88%,
    #703ac2 15.42%,
    #0070eb 40.77%,
    #0297fb 72.21%,
    #0ae2ff 95.53%
  );
}
.btn:hover {
  background: linear-gradient(
    120deg,
    #ff1994 -5.88%,
    #8e4fee 15.42%,
    #3091f9 40.77%,
    #3db1ff 72.21%,
    #3fe9ff 95.53%
  );
}
</style>
