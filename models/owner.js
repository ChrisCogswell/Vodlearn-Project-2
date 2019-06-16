module.exports = function(sequelize, DataTypes) {
    var Owner = sequelize.define("Owner", {
      user_name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }


      });

      Owner.associate=function(models){
        // User.belongsTo(models.Quiz, {
        //   foreignKey: {allowNull: false }, 
        //   onDelete: "cascade"
        // });

        Owner.hasMany(models.Quiz);
      }
      
    return Owner;
  };