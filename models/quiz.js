module.exports = function(sequelize, DataTypes) {
    var Quiz = sequelize.define("Quiz", {
      question: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      question_type: DataTypes.STRING,
      answer: DataTypes.INTEGER
    });
    return Quiz;
  };