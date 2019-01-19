module.exports = {
  secret: process.env.SECRET_AUTH || 'sercret-auth',
  mongodb: {
    URI: 'mongodb://localhost:27017/jwt-node',
    options: {
      useNewUrlParser: true
    }
  }
};