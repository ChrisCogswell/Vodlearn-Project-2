module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      quiz_list: DataTypes.STRING
    });
    return User;
  };