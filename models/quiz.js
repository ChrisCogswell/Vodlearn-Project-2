module.exports = function(sequelize, DataTypes) {
  var Quiz = sequelize.define("Quiz", {
    quiz_name: DataTypes.STRING,
    category: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    user: DataTypes.STRING
  });
  return Quiz;
};