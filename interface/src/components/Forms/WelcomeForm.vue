<script setup>
import { InputRadio, InputText } from '../common';

defineProps({
    form: Object,
});

</script>
<template>
    <InputText :required="true" label="Endereço de e-email *" type="email"  v-model="form.email"/>
    <InputRadio v-model="form.type"
        :options="[{label : 'Pessoa Física', value : 'PF'}, {label : 'Pessoa Jurídica', value : 'PJ'}]"
    />
</template>