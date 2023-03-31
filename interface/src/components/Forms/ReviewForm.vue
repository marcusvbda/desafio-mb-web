<script setup>
import { computed } from 'vue';
import { InputText } from '../common';

const props = defineProps({
    form: Object,
});

const nameLabel = computed(() => props.form.type == 'PJ' ? 'Razão Social *' :'Nome *');
const documentLabel = computed(() => props.form.type == 'PJ' ? 'CNPJ *' :'CPF *');
const dateLabel = computed(() => props.form.type == 'PJ' ? 'Data de Abertura' :'Data de Nascimento');

</script>
<template>
    <InputText v-if="form.email" :disabled="true"  :required="true" label="Endereço de e-email *" type="email"  v-model="form.email"/>
    <InputText v-if="form.name" :disabled="true"  :required="true" :label="nameLabel" type="text"  v-model="form.name"/>
    <InputText v-if="form.document" :disabled="true"  :required="true" :label="documentLabel" type="text"  v-model="form.document"/>
    <InputText v-if="form.birthdate" :disabled="true" :required="false" :label="dateLabel" type="date"  v-model="form.birthdate"/>
    <InputText v-if="form.phone" :disabled="true" :required="false" label="Telefone" type="text"  v-model="form.phone"/>
</template>