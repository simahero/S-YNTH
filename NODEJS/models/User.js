module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        settings: {
            type: DataTypes.STRING
        }
    });

    User.associate = models => {
        User.hasMany(models.Audience);
        User.hasMany(models.Campaign);
        User.hasMany(models.Template);
        User.hasMany(models.Tag);
    }

    return User;
}