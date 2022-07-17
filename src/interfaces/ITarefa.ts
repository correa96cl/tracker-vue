import IProjeto from "./IProjeto";

export default interface ITarefa {
    id: number,
    duracaoEmSegundos: Number,
    descricao: string,
    projeto: IProjeto
}