<script setup>
import { FooterBtns, StepHeader } from "../../../components/Content";
import { PasswordForm } from "../../../components/Forms";
const emit = defineEmits(['next','prev']);

const props = defineProps({
    form: Object
})

const submitForm = () => emit('next');
</script>
<template>
    <StepHeader 
        title="Senha de Acesso"
        :currentStep="3"
        :totalSteps="4"
    />

    <form @submit.prevent="submitForm()">
        <PasswordForm :form="form"/>
        <FooterBtns 
            prevBtnText="Voltar"
            nextBtnText="Continuar"
            @prev="emit('prev')"
        />
    </form>
</template>