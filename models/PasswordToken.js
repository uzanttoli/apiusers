var db = require("../database/connection");
var User = require("./User");


class PasswordToken{

    async create(email){
        var user = await User.findByEmail(email);

        if(user != undefined){

            try {

                var token = Date.now();

                await db.insert({
                    user_id: user.id,
                    used: 0,
                    token:token
                }).table("passwordtokens");
                return {status: true, token: token}
            } catch (error) {

                console.log(error);
                return {status: false, err: error}
            }

        }else{
            return {status: false, err: "O email passado não existi!"}
        }
    }

}

module.exports = new PasswordToken()