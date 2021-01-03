module.exports = (sequelize, DataTypes) => {

    const Campaign = sequelize.define("Campaign", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Campaign.associate = models => {
        Campaign.hasOne(models.Template);
        Campaign.hasMany(models.Tag);
    }

    return Campaign;
}