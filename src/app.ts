import express from 'express';

import { AppDataSource } from './database/AppDataSource';
import { personRouter } from './routes/PersonRoutes';

AppDataSource.initialize()    
    .then(() => console.log('Data Source has been initialized!'))
    .catch((e) => console.error('Error diring Data Source initialization ', e));

const app = express();
app.use(express.json());

app.use('/api/person', personRouter)
app.use('/api', (request, response) => {
    return response.json({
        message: 'Hello WOrd'
    })
});

export {app};