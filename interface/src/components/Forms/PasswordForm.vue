<script setup>
import { InputText } from '../common';

const props = defineProps({
    form: Object,
});

</script>
<template>
    <InputText :required="true" label="Sua Senha" type="password"  v-model="form.password"/>
</template>