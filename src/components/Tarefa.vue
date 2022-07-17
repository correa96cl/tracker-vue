<template>
<Box>
<div class="columns clicavel" @click="tarefaClicada">
<div class="column is-7">
{{tarefa.descricao || 'Tarefa sem descriçao'}}
</div>
<div class="column is-3">
{{tarefa.projeto?.nome || 'N/D'}}
</div>
<div class="column">
<Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>

</div>
</div>
</Box>
</template>

<script lang="ts">
import Box from './Box.vue';
import Cronometro from './Cronometro.vue';
import ITarefa from '../interfaces/ITarefa';
import {defineComponent, PropType} from 'vue';

export default defineComponent({
    name: 'Tarefa',
    emits: ['aoTarefaClicada'],
    components: {
        Box,
        Cronometro
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    },
    methods: {
        tarefaClicada () : void {
        this.$emit('aoTarefaClicada',this.tarefa )
        }
    }
})

</script>
<style scoped>
.clicavel{
    cursor: pointer;
}
</style>

