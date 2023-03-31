<script setup>
import { computed } from "vue";
import { FooterBtns, StepHeader } from "../../../components/Content";
import { PersonTypeForm } from "../../../components/Forms";
const emit = defineEmits(['next','prev']);

const props = defineProps({
    form: Object
})

const submitForm = () => emit('next');

const title = computed(() => props.form.type == 'PJ' ? 'Pessoa Jurídica' :'Pessoa Física');

</script>
<template>
    <StepHeader 
        :title="title"
        :currentStep="2"
        :totalSteps="4"
    />

    <form @submit.prevent="submitForm()">
        <PersonTypeForm :form="form"/>
        <FooterBtns 
            prevBtnText="Voltar"
            nextBtnText="Continuar"
            @prev="emit('prev')"
        />
    </form>
</template>