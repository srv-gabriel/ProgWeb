const server = http.createServer(function (req, res) {
    if (typeof process.argv[2] === "undefined") {
        res.write("Diretório não foi passado como parâmetro");
    }

    else{
        conteudo.forEach(function (element) {
            res.write(element + '\n');
        });
        res.end();

    }
});

server.listen(3000);