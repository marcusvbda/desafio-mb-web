<script setup>
import { ref } from "vue";
import { FooterBtns, StepHeader } from "../../../components/Content";
import { ReviewForm } from "../../../components/Forms";
import config from "../../../config";

const emit = defineEmits(['next','prev']);
const loading = ref(false); 

const props = defineProps({
    form: Object
})

const submitForm = async () => {
    loading.value = true;

    //timeout proposital afim de emular um carregamento mais lento
    setTimeout(async() => {
        const {apiUri} = config
        const request = await fetch(`${apiUri}/registration`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props.form)
        })

        const response = await request.json()

        if(request.ok && response.success){
            emit('next')
        }
    },1500)
}
</script>
<template>
    <StepHeader 
        title="Revise suas informações"
        :currentStep="4"
        :totalSteps="4"
    />

    <form @submit.prevent="submitForm()">
        <ReviewForm :form="form"/>
        <template v-if="loading">
        <div class="loading-text">Loading ...</div>
        </template>
        <FooterBtns     
            v-else
            prevBtnText="Voltar"
            nextBtnText="Cadastrar"
            @prev="emit('prev')"
        />
    </form>
</template>