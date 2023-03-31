<script setup>
import { RouterLink } from 'vue-router'
import config from "../config.js";

const { apiUri } = config

fetch(`${apiUri}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>