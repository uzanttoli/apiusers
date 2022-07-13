class HomeController{

    async index(req, res){
        res.send("TESTE1");
    }

}

module.exports = new HomeController();