<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  label : String,
  type : {
    type : String,
    default : "text"
  },
  modelValue : String,
  required : {
    type : Boolean,
    default : false
  },
  disabled : {
    type : Boolean,
    default : false
  }
})

const emit = defineEmits(["update:modelValue"]);
const value = ref(props.modelValue)

watch(() => value.value, (val) => {
  emit("update:modelValue",val)
})
</script>

<template>
  <div :class="`input-text ${disabled ? 'disabled' : ''}`">
    <label>{{ label }}</label>
    <input :disabled="disabled" :required="required" :type="type" v-model="value"/>
  </div>
</template>

<style lang="scss" scoped>
.input-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    margin-bottom: 8px;
  }

  input {
    height: 30px;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 3px 20px;
  }

  &.disabled {
    input {
      border: unset;
      background-color: white;
      padding: 0;
    }
  }
}
</style>