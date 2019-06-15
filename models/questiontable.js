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
      Question.belongsTo(models.Quiz, {
        foreignKey: {allowNull: false }, 
          onDelete: "cascade"
      });


    };


    return Question;
  };