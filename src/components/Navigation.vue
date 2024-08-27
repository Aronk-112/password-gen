<script setup>
import { onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>

  <header>

    <div class="branding">
      <p>PassMan</p>
    </div>

    <nav>
      <RouterLink v-for="(route, index) in router.getRoutes()"
        :to="route.path"
        :key="index"
      >
        {{ route.name }}
      </RouterLink>
    </nav>

  </header>

</template>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  nav > a {
    margin: 0 0.5rem;
    transition: all 100ms ease-in-out;
  }

  nav > a:hover {
    color: brown;
  }

  .branding {
    user-select: none;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>