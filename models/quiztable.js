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
    Quiz.hasMany(models.User);
    Quiz.belongsTo(models.Owner, {
      foreignKey: {allowNull: false }, 
        onDelete: "cascade"
    });
  };  
  
  
  return Quiz;
  };