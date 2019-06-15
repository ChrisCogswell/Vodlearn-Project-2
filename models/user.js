module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email:{
        type:DataTypes.STRING,
  
      }
      });

      User.associate=function(models){
        User.belongsTo(models.Quiz, {
          foreignKey: {allowNull: false }, 
          onDelete: "cascade"
        });

        
      }
      
    


    

    return User;
  };