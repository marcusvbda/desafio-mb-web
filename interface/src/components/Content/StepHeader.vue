<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  totalSteps: {
    type: Number,
    required: true,
  },
  currentStep: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="step-header">
    <div>Etapa <span class="primary-text">{{ currentStep }} </span> de {{ totalSteps }}</div>
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<style lang="scss" scoped>
  .step-header {
    margin: 50px 0 30px 0;
    .primary-text {
      color : #FF9900;
    }

    .title {
      margin: 10px 0;
      font-size: 1.5rem;
    }
  }
</style>