module.exports = (sequelize, DataTypes) => {
    const game = sequelize.define('game', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hypeRating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        releaseDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        platform: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING
        }
    })
    return game;
}