import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data_source';
import { routes } from './routes';

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.use(routes);

    return app.listen(process.env.PORT, () => {
        console.log(`server is running on port ${process.env.PORT}`);
    })  
})