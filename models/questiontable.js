module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("Quiz", {
      question_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question_name: DataTypes.STRING,
      answer: DataTypes.INTEGER
    });
    return Question;
  };