class User {
  constructor(name, username, password, token) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.token = token;
  }
}

module.exports = { User };
