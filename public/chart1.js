b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

fetch("/metricas/buscar/" + idUsuario, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
}).then((res) => {

    if (res.ok) {
        console.log(res);

        res.json().then(json => {
            console.log(JSON.stringify(json));


            var acertos = json.acertos;
            var erros = json.erros;

            const dados = {
                labels: ['Pontuacao',], // Labels para as pontuação
                datasets: [{
                    label: 'Acertos',
                    data: [acertos], // Quantidade de acertos por tentativa
                    backgroundColor: 'rgba(54, 162, 235, 0.5)', // Cor para acertos
                    borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda para acertos
                    borderWidth: 1
                }, {
                    label: 'Erros',
                    data: [erros], // Quantidade de erros por tentativa
                    backgroundColor: 'rgba(255, 99, 132, 0.5)', // Cor para erros
                    borderColor: 'rgba(255, 99, 132, 1)', // Cor da borda para erros
                    borderWidth: 1
                }]
            };

            // Opções do gráfico
            const opcoes = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Quantidade' // Rótulo do eixo y
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Tentativas' // Rótulo do eixo x
                        }
                    }]
                }
            };

            // Criando o gráfico de barras
            const ctx = document.getElementById('graficoBarras').getContext('2d');
            const graficoBarras = new Chart(ctx, {
                type: 'bar',
                data: dados,
                options: opcoes
            });


        });
    }
}).catch((error) => {

    console.log(error);

})











// fetch("/metricas/buscar/" + idUsuario, {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//     },
// }).then((res) => {

//     if (res.ok) {
//         console.log(res);

//         res.json().then(json => {
//             console.log(JSON.stringify(json))

// var acertos = sessionStorage.getItem('acertos');
// var erros = sessionStorage.getItem('erros');

// const dados = {
//     labels: ['Pontuacao',], // Labels para as pontuação
//     datasets: [{
//         label: 'Acertos',
//         data: [acertos], // Quantidade de acertos por tentativa
//         backgroundColor: 'rgba(54, 162, 235, 0.5)', // Cor para acertos
//         borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda para acertos
//         borderWidth: 1
//     }, {
//         label: 'Erros',
//         data: [erros], // Quantidade de erros por tentativa
//         backgroundColor: 'rgba(255, 99, 132, 0.5)', // Cor para erros
//         borderColor: 'rgba(255, 99, 132, 1)', // Cor da borda para erros
//         borderWidth: 1
//     }]
// };

// // Opções do gráfico
// const opcoes = {
//     scales: {
//         y: [{
//             ticks: {
//                 beginAtZero: true
//             },
//             scaleLabel: {
//                 display: true,
//                 labelString: 'Quantidade' // Rótulo do eixo y
//             }
//         }],
//         x: [{
//             scaleLabel: {
//                 display: true,
//                 labelString: 'Tentativas' // Rótulo do eixo x
//             }
//         }]
//     }
// };

// // Criando o gráfico de barras
// const ctx = document.getElementById('graficoBarras').getContext('2d');
// const graficoBarras = new Chart(ctx, {
//     type: 'bar',
//     data: dados,
//     options: opcoes
// });

