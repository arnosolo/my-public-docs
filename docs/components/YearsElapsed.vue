<script setup lang="ts">
function yearsSince(pastDate: string) {
  const now = new Date();
  const past = new Date(pastDate);
  let years = now.getFullYear() - past.getFullYear();

  // Account for months and days difference if current date is not yet in the anniversary year
  // if (now.getMonth() < past.getMonth() ||
  //     (now.getMonth() === past.getMonth() && now.getDate() < past.getDate())) {
  //   years--;
  // }
  return years;
}

const dateString = "2022-09-01";
const yearsElapsed = yearsSince(dateString);
</script>

<template>
  <span>{{ yearsElapsed }}</span>
</template>