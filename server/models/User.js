import sequelize from "../db.js";
import { DataTypes as DT } from "sequelize";

const User = sequelize.define('User',{
    id: {type: DT.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DT.STRING, unique: true}
});

export default User;