const jwt = require('jsonwebtoken');

module.exports = {
generateToken: function(user) {
return jwt.sign(user, 'secretkey', { expiresIn: '1h' });
}
}