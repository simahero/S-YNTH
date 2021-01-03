module.exports = (sequelize, DataTypes) => {

    const Audience = sequelize.define("Audience", {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        }
    });

    Audience.associate = models => {
        Audience.hasMany(models.Tag);
    }

    return Audience;
}