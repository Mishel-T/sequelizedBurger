module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Post", {
        ID: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            autoIncrement: true,
            primaryKey: true

        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        
    });
    return Burger;
};
