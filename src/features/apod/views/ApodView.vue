<script setup lang="ts">
import { computed } from "vue"

import { useApodQuery } from "../../apod/composables/useApodQuery"
import { type GetApodResponse } from "../models"

const { data: todayApodResponse, isPending: isLoadingApod } = useApodQuery({
  // count: 10,
})

const todayApod = computed<GetApodResponse | null>(() => {
  const data = todayApodResponse.value

  if (!data) return null

  return Array.isArray(data) ? (data[0] ?? null) : data
})
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 px-6"
  >
    {{ isLoadingApod }}
    {{ todayApod }}
  </div>
</template>
