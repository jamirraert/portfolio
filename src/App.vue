<script setup>

</script>

<template>
  <nav>
    <RouterLink :to="{name: 'home'}">Go to Home</RouterLink>
    <RouterLink :to="{name: 'about'}">Go to About</RouterLink>
  </nav>
  <main>
    <h1 class="text-2xl font-uderline bg-red-400">test</h1>
    <RouterView />
  </main>
</template>
