<script setup lang="ts" name="Home">
useTitle('Modele | Home')
</script>

<template>
  <div f-c-c h-screen>
    <header flex gap-5 py-2 px-5>
      <button
        bg-inherit
        border-none
        @click="toggleDark()"
      >
        <div
          v-if="!isDark"
          icon-btn
          i-carbon:light-filled
        />
        <div
          v-else
          icon-btn
          i-akar-icons:moon-fill
        />
      </button>
      <Navlink
        icon-btn
        i-carbon:logo-github
        to="https://github.com/chris-zhu/modele"
      />
    </header>
  </div>
</template>
