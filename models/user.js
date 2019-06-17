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
  
      },
      attempts:{
        type:DataTypes.INTEGER,
        defaultValue:0
      },
      score:{
        type:DataTypes.FLOAT,
        defaultValue:0
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