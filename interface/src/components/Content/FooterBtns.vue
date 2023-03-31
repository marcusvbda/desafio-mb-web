<script setup>
import { Button } from '../common';

defineProps({
  nextBtnText: String,
  prevBtnText: String,
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['next', 'prev']);

const next = () => emit('next');
const prev = () => emit('prev');
</script>


<template>
  <div class="footer-btns">
    <Button :disabled="disabled" v-if="prevBtnText" @click="prev()">{{ prevBtnText }}</Button>
    <Button :disabled="disabled"  v-if="nextBtnText" class="primary" @click="next()" type="submit">{{ nextBtnText }}</Button>
  </div>
</template>

<style lang="scss" scoped>
  .footer-btns {
    margin-top: 30px;
    margin-bottom: 100px;
    display: flex;
    gap: 10px;
  }
</style>