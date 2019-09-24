module.exports = (sequelize, DataTypes) => {
    var Add = sequelize.define("Add", {
        EpisodeNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [2, 10]
            }
        },
        EpisodeTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ByGeorgia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ByKaren: {
            type: DataTypes.STRING,
            allowNull: false
        },

    })
}