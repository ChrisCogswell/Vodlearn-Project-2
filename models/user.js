module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name: DataTypes.STRING,
      quiz_list: DataTypes.STRING
    });
    return User;
  };