import User from "../models/User.js";

class UserController {
    async registration(req, res, next) {
        User.create({name: req.body.name});
        res.status(200).json({name: req.body.name});
    }

    async test(req, res, next) {
        res.status(200).json('test');
    }

    async test1(req, res, next) {
        res.status(200).json(`${req.body.name}`);
    }
}

export default new UserController();