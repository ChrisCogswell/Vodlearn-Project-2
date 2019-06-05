module.exports = function(sequelize, DataTypes) {
    var quizList = sequelize.define("Quiz_List", {
      quiz_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      user: DataTypes.JSON
    });
    return quizList;
  };