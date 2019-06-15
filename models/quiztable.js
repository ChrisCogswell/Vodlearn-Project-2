module.exports = function(sequelize, DataTypes) {
    var Quiz = sequelize.define("Quiz", {
      quiz_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      owner: DataTypes.STRING
    });
    
  Quiz.associate = function(models) {
    Quiz.hasMany(models.Question);
  };  
  
  
  return Quiz;
  };