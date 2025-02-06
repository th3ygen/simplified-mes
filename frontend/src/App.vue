<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarComponent from './components/SidebarComponent.vue';
import LogoComponent from './components/LogoComponent.vue';
import type { Nav } from './components/SidebarComponent.vue';
import IconEcosystem from './components/icons/IconEcosystem.vue';
import IconDocumentation from './components/icons/IconDocumentation.vue';
import IconTooling from './components/icons/IconTooling.vue';
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag';
import { watch } from 'vue';

const navs: Nav[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: IconTooling
  },
  {
    name: 'Track',
    path: '/track',
    icon: IconEcosystem
  },
  {
    name: 'Quality Control',
    path: '/quality',
    icon: IconDocumentation
  }
]

const { result } = useQuery(gql`
  query getMachines {
    machines {
      id
      name
    }
  }
`)

watch(result, () => {
  console.log(result)
})

</script>

<template>
  <main class="bg-gray-50 flex min-h-[100vh]">
    <header class="w-0 sm:w-64">
      <SidebarComponent :navs="navs">
        <template #logo>
          <LogoComponent />
        </template>
      </SidebarComponent>
    </header>
    <main class="w-full mt-12 px-6 py-8 sm:px-10">
      <RouterView />
    </main>
  </main>
</template>

<style scoped></style>
