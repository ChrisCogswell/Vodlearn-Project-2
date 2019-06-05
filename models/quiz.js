module.exports = function(sequelize, DataTypes) {
    var Quiz = sequelize.define("Quiz", {
      question: DataTypes.TEXT,
      question_type: DataTypes.STRING,
      answer: DataTypes.INTEGER
    });
    return Quiz;
  };