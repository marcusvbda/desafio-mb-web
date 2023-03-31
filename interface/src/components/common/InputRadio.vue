<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  options : {
    type : Array,
    required : true
  },
  modelValue : String,
})

const emit = defineEmits(["update:modelValue"]);
const value = ref(props.modelValue)

watch(() => value.value, (val) => {
  emit("update:modelValue",val)
})
</script>

<template>
  <div class="input-radio-section">
    <label class="input-radio" v-for="option in options" >
      <input type="radio" :value="option.value" v-model="value" />
      {{ option.label }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.input-radio-section {

  display: flex;
  flex-direction: row;
  gap:20px;
  margin: 20px 0;
  .input-radio {
    display: flex;
    flex-direction: row;

    input {
      margin: 0 5px 0 0;
    }
  }
}
</style>