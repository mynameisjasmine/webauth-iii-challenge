const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const secrets = require('../config/secret.js');
const { userValidation } = require('../users/user-helpers.js');

//POST  to register (endpoint is /api/auth/register)

router.post('/register', (req, res) => {
 let user = req.body

 const validateResult = userValidation(user)
 console.log('after validate', user);
 
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;
    console.log('after hashing', user);
 

 Users.add(user).then(saved => {
   console.log(saved);
    res.status(201).json(saved)

 })
 .catch(error => {

    res.status(500).json({message: "Unable to register user", err: error});
  });
})


//POST  to login (endpoint is /api/auth/login)
router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = getJwtToken(user)
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token,
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  function getJwtToken(user) {
    const payload = {
      username: user.username,
      subject: user.id,
      department: user.department
    }

  
    const options = {
     expiresIn: '8h' 
    }
    
    return jwt.sign(payload, secrets, options)
  }
  
  

module.exports = router;