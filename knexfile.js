
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex',
      user: 'postgres',
      password: 'docker',
      port: '5433'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`

    }
  },
  onUpdateTrigger: table => `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamp();
  
  `

};
