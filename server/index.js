import express, { json } from 'express';
import 'dotenv/config';
import sequelize from './db.js';
import models from './models/models.js';
import router from './router/index.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*'); // разрешает принимать запросы со всех доменов
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // какие методы в запросах разрешается принимать
    next();
});
app.use(cors());
app.use(json());
app.use('/api', router);

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('Сервер работает');
});


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();