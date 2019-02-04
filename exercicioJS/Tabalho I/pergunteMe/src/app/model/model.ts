export class Pergunta {
    _id : string
    descricao : string
    dataPergunta: Date
    remetente : Usuario
    destinatario: Usuario
    resposta : string
    dataResposta: Date
}

export class Usuario {
    _id : string
    nome : string
    login : string
    senha : string
    email : string
    bio : string
    foto : string

}