var getQuizModel = require("../models/getQuizModel");

function tentativa(req, res) {
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;

    getQuizModel.tentativa(acertos, erros)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    tentativa: tentativa
};
