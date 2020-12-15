function index(req,res){
    res.render("main/index",{
        titulo: "Vigilantes da Floresta"    
    });
}

function sobre(req,res){
    res.render("main/sobre",{
        titulo: "Sobre"    
    });
}

function jogo(req,res){
    res.render("main/jogo",{   
    });
}

function ui(req,res){
    res.render("main/ui",{

    });
}

module.exports = {index,sobre,jogo,ui};