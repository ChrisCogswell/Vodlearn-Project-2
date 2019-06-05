module.exports = function(sequelize, DataTypes) {
    var quizList = sequelize.define("Quiz_List", {
      quiz_name: DataTypes.STRING,
      user: DataTypes.JSON
    });
    return quizList;
  };