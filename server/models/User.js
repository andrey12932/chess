import sequelize from "../db.js";
import { DataTypes as DT } from "sequelize";

const User = sequelize.define('User',{
    id: {type: DT.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DT.STRING, unique: false},
    email: {type: DT.STRING, unique: true},
    password: {type: DT.STRING}
});

export default User;