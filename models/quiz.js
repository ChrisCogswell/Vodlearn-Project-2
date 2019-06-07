module.exports = function(sequelize, DataTypes) {
  var Quiz = sequelize.define("Quiz", {
    quiz_name: DataTypes.STRING,
    question: DataTypes.TEXT,
    choices: DataTypes.STRING,
    correct_answer: DataTypes.STRING,
    user: DataTypes.TEXT
  });
  return Quiz;
};