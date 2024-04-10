const path = require('path');

module.exports = ({env}) => ({
  connection: {
    client: 'postgres',
    connection:{
      host: env("DATABASE_HOST","aws-0-us-west-1.pooler.supabase.com"),
      port: env("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USER", "postgres.epprffxpiyayyoduhpgm"),
      password: env("DATABASE_PASSWORD", "GJLH6oGTM7ByzidS"),
      ssl: env("DATABASE_SSL", false)
    },
    useNullAsDefault: true
  }
})
