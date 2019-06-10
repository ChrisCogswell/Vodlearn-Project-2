module.exports = function(sequelize, DataTypes) {
    var quizList = sequelize.define("Quiz_List", {
      quiz_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      owner: DataTypes.STRING
    });
    return quizList;
  };