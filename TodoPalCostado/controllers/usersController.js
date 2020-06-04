const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const usersController = {
    showLoginForm: function(req, res){
        res.render("formLogin.ejs");
    },
    
    processLoginForm: function(req,res){
        res.send("dsadsadsa");

        /*let usuario = {
            email: req.body.email,
            password: req.body.password
            
        };
        */
        
    },
    showRegisterForm: function(req, res){
        res.render("formRegister.ejs");
    },
    processRegisterForm: function(req, res){
        
        let name = req.body.name;
        let email = req.body.email;
        let password = bcrypt.hashSync(req.body.password,10);

        let usuario = {
            name: name,
            email: email,
            password: password,
            confirmpassword: password
        };

        let usuariosJSON = fs.readFileSync("./data/users.json");
        let usuariosJS = JSON.parse(usuariosJSON);
        usuariosJS.push(usuario);
        usuariosJSON = JSON.stringify(usuariosJS);
        fs.writeFileSync("./data/users.json",usuariosJSON);

        res.send("gracias");

        
    }

}



module.exports = usersController;