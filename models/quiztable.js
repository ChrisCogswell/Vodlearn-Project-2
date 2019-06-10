module.exports = function(sequelize, DataTypes) {
    var Quiz = sequelize.define("Quiz", {
      quiz_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      user: DataTypes.STRING
    });

  Quiz.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Quiz.hasMany(models.Question, {
      onDelete: "cascade"
    });
  };  
  
  
  return Quiz;
  };