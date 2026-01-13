<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<template>
  <!-- GLOBAL BACKGROUND -->
  <div class="fixed inset-0 bg-black font-saira">
    <!-- Starfield (3 columns) -->
    <div class="starfield pointer-events-none"></div>

    <!-- Nebula -->
    <div
      class="pointer-events-none absolute -top-40 -left-40 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[200px]"
    />
  </div>

  <!-- SCROLLABLE CONTENT -->
  <div class="relative z-10 min-h-screen">
    <RouterView />
  </div>
</template>

<style scoped>
/* =========================
   STARFIELD (FULL WIDTH)
   ========================= */

.starfield,
.starfield::before,
.starfield::after {
  position: absolute;
  inset: 0;
  content: "";
  background: transparent;
}

/* BASE STARS (CENTER COLUMN) */
.starfield {
  width: 1px;
  height: 1px;
  background: white;
  opacity: 0.9;

  box-shadow:
    40px 60px white,
    120px 200px white,
    180px 90px white,
    260px 240px white,
    340px 140px white,
    420px 300px white,
    520px 80px white,
    600px 220px white,
    700px 160px white,
    820px 260px white,
    940px 120px white,
    1080px 280px white;
}

/* RIGHT COLUMN */
.starfield::before {
  width: 0.6px;
  height: 0.6px;
  background: white;
  opacity: 0.6;

  box-shadow: inherit;
  transform: translateX(1200px);
}

/* LEFT COLUMN */
.starfield::after {
  width: 0.4px;
  height: 0.4px;
  background: white;
  opacity: 0.4;

  box-shadow: inherit;
  transform: translateX(-1200px);
}
</style>
