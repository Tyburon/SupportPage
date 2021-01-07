export default {

  username: 'docker',
  password: '',
  database: 'sqlnode',
  options: {
    dialect: 'postgres',
    host: 'localhost',
    define: {
      timestamps: true,
      underscored: true,
    },
  }
};
