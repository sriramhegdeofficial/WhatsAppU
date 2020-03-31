const express = require('express');
const router = express.Router();
const User = require("./../models/user");



router.post('/api/signup',  (req, res) => {
  
    const {email, username, password} = req.body;
    res.send({
        user: {email, username, password}
    })

  
})
    
    

    // isDuplicate = await User.findOne({ username: username});
    // if(isDuplicate) {
    //     res.json({
    //         error: "username should be unique"
    //     });
    //     console.log("first d2");
    //     done();
    // }

    // var user = new User({ email: email, username: username, password: password });

    // user.save(() => {
    //     console.log("first d3");
    //     res.json({
    //         message: "signed up successfully"
    //     })
    // })





module.exports = router;
