const bcryptjs = require('bcryptjs')

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users',
    [
      {
        nome: 'luiz',
        email: 'Luiz1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'luiz 2',
        email: 'Luiz2@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'luiz 3',
        email: 'Luiz3@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
