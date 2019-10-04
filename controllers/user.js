const connection = require("../config/db");
const bcrypt = require('bcrypt')
module.exports = {
  getAll: (req, res) => {
    connection.query(`SELECT * from users`, (error, results, fields) => {
      if (error) {
        res.status(500).send({
          message:
            "error when try to get users, check your connection to database",
          error
        });
      } else {
        res.send({
          message: `Users`,
          results
        });
      }
    });
  },

  deleteUser: (req, res, next) => {
    const query = `delete from users where id = ?`;
    connection.query(query, [req.params.id]),
      (error, results, fields) => {
        if (error) {
          res.status(500).send({
            message: `Error cannot delete user`,
            error
          });
        } else {
          res.status(200).send({
            message: `user diededed`,
            results,
            fields
          });
        }
      };
  },
  editUser: (req, res) => {
    connection.query(
      "UPDATE users SET name=?, email = ? where id = ?",
      [req.body.name, req.body.email, req.params.id],
      (error, results, fields) => {
        if (error) {
          res.status(500).send({
            message: `Error editing user`,
            error
          });
        } else {
          res.status(200).send({
            message: `user ripperoni`,
            results,
            fields
          });
        }
      }
    );
  },
  addUser: (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      if (err) {
        res.send({
          message: `password is doodoo`,
          err
        });
      } else {
        connection.query(
          "INSERT INTO users (name, email,password) values(?,?,?)",
          [req.body.name, req.body.email, hash],
          (error, results, fields) => {
            if (error) {
              res.status(500).send({
                message: `Error adding user`,
                error
              });
            } else {
              res.status(200).send({
                message: `user added`,
                results,
                fields
              });
            }
          }
        );
      }
    });
  }
};
