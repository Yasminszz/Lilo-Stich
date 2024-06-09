var database = require("../database/config")

function autenticar(EmailUsuario, SenhaUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", EmailUsuario, SenhaUsuario)
    var instrucaoSql = `
        SELECT IDUsuario, NomeUsuario, SobrenomeUsuario, EmailUsuario, SenhaUsuario FROM usuario WHERE EmailUsuario = '${EmailUsuario}' AND SenhaUsuario = '${SenhaUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(NomeUsuario, SobrenomeUsuario, EmailUsuario, SenhaUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", NomeUsuario, SobrenomeUsuario, EmailUsuario, SenhaUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (NomeUsuario, SobrenomeUsuario, EmailUsuario, SenhaUsuario) VALUES ('${NomeUsuario}', '${SobrenomeUsuario}', '${EmailUsuario}', '${SenhaUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};