<template>
  <div
    class="max-w-7xl px-4 mx-auto flex sm:flex-row items-center w-full h-[calc(100vh-100px)] sm:h-[70vh]"
  >
    <div class="w-full sm:flex">
      <div class="w-full sm:w-1/2">
        <h1
          class="text-5xl sm:text-9xl leading-none font-bold text-white text-center sm:text-left"
        >
          Web3 <br />Incubation <br />Program
        </h1>
        <IncubationHomeHeroButtons class="hidden sm:block mt-16" />
      </div>
      <div
        class="w-full sm:w-1/2 flex justify-center sm:justify-end mt-8 my-12 sm:my-0"
      >
        <img
          src="~/assets/images/incubation/home/hero-text.svg"
          alt="by Sony Network Communications and Astar"
          class="max-w-[260px] sm:max-w-[520px] w-full"
        />
      </div>
      <IncubationHomeHeroButtons class="sm:hidden" />
    </div>
  </div>
</template>
