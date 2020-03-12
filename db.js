const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('database is connected'))
    .catch(err => console.log(err));

User = sequelize.import('./models/user')
Games = sequelize.import('./models/game');

Games.belongsTo(User);
User.hasMany(Games);

module.exports = sequelize;