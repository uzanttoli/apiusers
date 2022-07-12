var db = require("../database/connection");
var bcrypt = require("bcrypt");

class User {
  async findAll() {
    try {
      var result = await db
        .select(["id", "name", "email", "role"])
        .table("users");
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async findById(id) {
    try {
      var result = await db
        .select(["id", "name", "email", "role"])
        .table("users")
        .where({ id: id });

      if (result.length > 0) {

        return result[0];

      } else {

        return undefined;

      }
    } catch (error) {
        
      console.log(error);
      return undefined;
      
    }
  }

  async new(email, name, password) {
    try {
      //   var { email, name, password } = user;
      var hash = await bcrypt.hash(password, 10);

      await db.insert({ email, name, password: hash, role: 0 }).table("users");
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async findEmail(email) {
    try {
      var result = await db.select("*").from("users").where({ email: email });

      if (result.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}

module.exports = new User();
