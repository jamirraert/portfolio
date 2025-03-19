<script setup>

</script>

<template>
  <nav>
    <RouterLink :to="{name: 'home'}">Go to Home</RouterLink>
    <RouterLink :to="{name: 'about'}">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
