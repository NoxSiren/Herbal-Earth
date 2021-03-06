//get user model
const {User}= require('../models');

module.exports={
    renderHomePage: async (req, res) => {
        res.render('homepage');
    }, 
    getAllRecipes: async (req, res) => {
        try {
            const user = await User.create({email, password});
            res.json(user);
        } catch (e) {
            res.json(e)
            
        }
    }, 
    // seperate controller for drinks
    getAllDrinks: async (req,res)=>{
        try {
            const userData = await User.findOne({
                where:{
                    email: req.body.email
                }
            });
            const userFound = userData.get({plain:true});
            if (userFound.password === req.body.password){
                req.session.save(()=>{
                    req.session.loggedIn=true;
                    req.session.user= userFound;
                    req.json({success: true});
                });
            }
        } catch (e) {
            res.json(e);
        }
    },
    signupHandler: async (req, res) => {
        const {email, password} = req.body;
        try {
            const createdUser = await User.create({email, password});
            const user = createdUser.get({plain:true});
            req.session.save(()=>{
                req.session.loggedIn=true;
                req.session.user= user;
                res.redirect('/dashboard');
            })
        } catch (e) {
            res.json(e);
        }
    },
    //if user is logged in, go to dashboard
    //if not, return to login page 
    loginView: (req, res) => {
        if(req.session.loggedIn){
            return res.redirect('/dashboard');
        }
        res.render('login');
    },
    signupView: (req, res) => {
        if (req.session.loggedIn){
            return res.redirect('/dashboard');
        }
        res.render('signUp');
    },
    logout: (req, res)=>{
        req.session.destroy(()=>{
            res.send({status:true});
        });
    },
}