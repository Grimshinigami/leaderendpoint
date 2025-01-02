import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))


// Import routers
import mpsRouter from './routes/mps.routes.js'
import healthCheckRouter from './routes/health.routes.js'
import mlaRouter from './routes/mla.routes.js'
import mcpRouter from './routes/mla.routes.js'
import userSuggestedRouter from './routes/userSuggested.routes.js'

// Routes declaration

app.use('/api/v1/mps',mpsRouter)
app.use('/api/v1/healthcheck',healthCheckRouter)
app.use('/api/v1/mlas',mlaRouter);
app.use('/api/v1/mcps',mcpRouter);
app.use('/api/v1/userSuggested',userSuggestedRouter);

export {app}