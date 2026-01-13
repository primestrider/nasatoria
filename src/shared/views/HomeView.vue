<script setup lang="ts">
import NasaLogo from "@/assets/logo.svg"

const options = {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE", // untuk open source / portfolio
  scrollingSpeed: 800, // durasi scroll (ms)
  easingcss3: "ease-in-out", // easing halus
  keyboardScrolling: true,
  fitToSection: true,
}
</script>

<template>
  <full-page :options="options">
    <!-- SECTION 1: HERO -->
    <section class="section flex items-center">
      <div class="max-w-3xl mx-auto px-6 w-full">
        <div class="bg-secondary border border-border rounded-2xl p-8">
          <img :src="NasaLogo" alt="nasa-logo" class="h-10 mb-4" />

          <h1 class="text-3xl font-bold text-accent">NASATORIA</h1>

          <p class="mt-4 text-secondary-text leading-relaxed">
            Explore NASA open data through a modern and minimal web interface.
          </p>

          <div class="mt-8">
            <button
              class="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Explore Space
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: FEATURES -->
    <section class="section flex items-center">
      <div class="max-w-3xl mx-auto px-6 w-full">
        <div class="grid gap-6 md:grid-cols-3">
          <div class="bg-secondary border border-border rounded-xl p-6">
            <h3 class="font-semibold text-accent mb-2">APOD</h3>
            <p class="text-secondary-text text-sm">Daily astronomy images from NASA.</p>
          </div>

          <div class="bg-secondary border border-border rounded-xl p-6">
            <h3 class="font-semibold text-accent mb-2">Mars Rover</h3>
            <p class="text-secondary-text text-sm">Explore photos captured on Mars.</p>
          </div>

          <div class="bg-secondary border border-border rounded-xl p-6">
            <h3 class="font-semibold text-accent mb-2">Asteroids</h3>
            <p class="text-secondary-text text-sm">Track near-Earth objects and hazards.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: ABOUT -->
    <section class="section flex items-center">
      <div class="max-w-3xl mx-auto px-6 w-full">
        <div class="bg-secondary border border-border rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-accent">About Nasatoria</h2>

          <p class="mt-4 text-secondary-text leading-relaxed">
            Nasatoria is a frontend exploration project built on top of NASA Open APIs, focused on
            performance and clean UI.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 4: CTA -->
    <section class="section flex items-center">
      <div class="max-w-3xl mx-auto px-6 w-full">
        <div class="bg-secondary border border-border rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold text-accent">Ready to Explore?</h2>

          <p class="mt-4 text-secondary-text">
            Start exploring the universe through NASA open data.
          </p>

          <div class="mt-8">
            <button
              class="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-xl font-medium transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  </full-page>
</template>
