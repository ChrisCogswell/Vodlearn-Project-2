module.exports = function(sequelize, DataTypes) {
    var Choice = sequelize.define("Choice", {
      choice: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    
    });

    Choice.associate = function(models) {
    
      Choice.belongsTo(models.Question, {
        foreignKey: {allowNull: false }, 
          onDelete: "cascade"
      });


    };


    return Choice;
  };