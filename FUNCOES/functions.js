//trazer a lista 

import { ListarTodos } from "../MANIPULACOES/ManipuladorArquivo.js";


//saber qual é o ultimo id cadastrado


//somar + 1 para ser o proximo id


//return

export async function gerarNovoId() {
    const registros_alunos = await ListarTodos();

    //pegar todos os IDs existentes
    const ids = registros_alunos.map((alunos) => alunos.id);

    const novoID = Math.max(...ids) +1;
    return novoID;
}

