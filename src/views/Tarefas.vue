<template>

    <Formulario @aoSalvarTarefa="salvarTarefa"/>

    <div class="lista">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" @aoTarefaClicada="selecionarTarefa"/>
      <Box v-if="listaEstaVazia">
    Voce nao esta muito productivo hoje :(
    </Box >
    </div>
  <div class="modal " :class="{'is-active': tarefaSeleccionada}" v-if="tarefaSeleccionada">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Editar</p>
      <button @click="fecharModal" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
     <div class="field">
     <label for="descricaoDaTarefa" class="label">Nome do Tarefa </label>
     <input type="text" class="input" v-model="tarefaSeleccionada.descricao"  id="descricaoDaTarefa" />
     </div>
    </section>
    <footer class="modal-card-foot">
      <button @click="alterarTarefa" class="button is-success">Salvar</button>
      <button @click="fecharModal" class="button">Cancelar</button>
    </footer>
  </div>
</div>

</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import Box from '../components/Box.vue';
import {useStore} from '@/store'
import {OBTER_TAREFAS, CADASTRAR_TAREFAS, OBTER_PROJETOS, ALTERAR_TAREFA} from '@/store/tipo-acoes'
import ITarefa from '@/interfaces/ITarefa'


export default defineComponent({
  name: 'App',
  components: {
   
    Formulario,
    Tarefa,
    Box
  },
   computed: {
  listaEstaVazia() : boolean {
    return this.tarefas.length === 0
}
   },
   data (){
return {
  tarefaSeleccionada: null as ITarefa | null,
}
   },
   methods : {
     salvarTarefa (tarefa: ITarefa): void{
       this.store.dispatch(CADASTRAR_TAREFAS, tarefa)
     },
      selecionarTarefa(tarefa: ITarefa){
        this.tarefaSeleccionada = tarefa
      
     },
     fecharModal(){
    console.log('Fechar modal')
    this.tarefaSeleccionada = null
   },
   alterarTarefa(){
    this.store.dispatch(ALTERAR_TAREFA, this.tarefaSeleccionada).then(() => this.fecharModal())
    
   }
   },
   setup(){
    const store = useStore()
    store.dispatch(OBTER_TAREFAS)
    store.dispatch(OBTER_PROJETOS)

    return {
      tarefas: computed(() => store.state.tarefas),
      store
    }
   }

});
</script>
