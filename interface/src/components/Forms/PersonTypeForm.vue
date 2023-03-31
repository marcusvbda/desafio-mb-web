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
    <InputText :required="true" :label="nameLabel" type="text"  v-model="form.name"/>
    <InputText :required="true" :label="documentLabel" type="text"  v-model="form.document"/>
    <InputText :required="false" :label="dateLabel" type="date"  v-model="form.birthdate"/>
    <InputText :required="false" label="Telefone" type="text"  v-model="form.phone"/>
</template>