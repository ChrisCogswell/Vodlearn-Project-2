module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
      question_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question: DataTypes.STRING,
      answer: DataTypes.INTEGER
    });


    Question.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Question.belongsTo(models.Quiz, {
        foreignKey: {allowNull: false }, 
          onDelete: "cascade"
      });


    };


    return Question;
  };