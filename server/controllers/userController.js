import User from "../models/User.js";

class UserController {
    async registration(req, res, next) {
        console.log(req);
        console.log(req.body);
        console.log(req.body.name, req.body.email, req.body.password )
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).json({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
    }

    async test(req, res, next) {
        res.status(200).json('test');
    }

    async test1(req, res, next) {
        res.status(200).json(`${req.body.name}`);
    }
}

export default new UserController();