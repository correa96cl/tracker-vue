import IProjeto from "./IProjeto";

export default interface ITarefa {
    duracaoEmSegundos: Number,
    descricao: string,
    projeto: IProjeto
}