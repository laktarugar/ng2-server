const {v4} = require('uuid');

class AuthService {
  constructor() {
    this.data = {};
  }
  login() {
    let token = v4();
    this.data[token] = Date.now() + 30 * 1000;
    return token;
  }
  checkToken(token) {
    if (this.data[token] !== undefined) {
      console.log('tt', this.data[token], Date.now())
      if (this.data[token] > Date.now()) {
        return true;
      } else {
        delete this.data[token];
        return false;
      }
    } else {
      return false;
    }

  }
}
module.exports = new AuthService();
