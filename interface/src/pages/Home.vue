<script setup>
import { ref } from "vue";
import {Step1, Step2, Step3, Step4, FinishedStep} from "../fragments/Home/Steps";
import config from "../config";

const loading = ref(true); 
const step = ref(1); 
const form = ref({});

const fetchFormFields = async () => {
  const {apiUri} = config;
  const response = await fetch(`${apiUri}/registration`);
  const data = await response.json();
  form.value = data;
  loading.value = false;
}

// timeout proposital afim de emular um carregamento mais lento
setTimeout(() => {
  fetchFormFields();
}, 1500);
</script>
<template>
  <div class="container">
    <template v-if="loading">
      <div class="loading-text">Loading ...</div>
    </template>
    <template v-else>
      <Step1 v-if="step == 1" @next="step = ++step" :form="form"/>
      <Step2 v-if="step == 2" @next="step = ++step" @prev="$step = --step" :form="form"/>
      <Step3 v-if="step == 3" @next="step = ++step" @prev="$step = --step" :form="form"/>
      <Step4 v-if="step == 4" @next="step = ++step" @prev="$step = --step" :form="form"/>
      <FinishedStep v-if="step == 5" />
    </template>
  </div>
</template>