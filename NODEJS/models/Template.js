module.exports = (sequelize, DataTypes) => {

    const Template = sequelize.define("Template", {
        content: {
            type: DataTypes.STRING
        }
    });

    return Template;
}