<script setup>
import { FooterBtns, StepHeader } from "../../../components/Content";
import { WelcomeForm } from "../../../components/Forms";
const emit = defineEmits(['next']);

const props = defineProps({
    form: Object
})

const submitForm = () => emit('next');
</script>
<template>
    <StepHeader 
        title="Seja bem vindo(a)"
        :currentStep="1"
        :totalSteps="4"
    />
    <form @submit.prevent="submitForm()">
        <WelcomeForm :form="form"/>
        <FooterBtns 
            nextBtnText="Continuar"
        />
    </form>
</template>