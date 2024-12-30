import express from 'express';
import cookieParser from 'cookie-parser';
import Path from 'path';

import authRoutes from './routes/auth.route.js';
import movieRoutes from './routes/movie.route.js';
import tvRoutes from './routes/tv.route.js';
import searchRoutes from './routes/search.route.js';

import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
import {protectRoute} from './middleware/protectRoute.js';


const app = express();

const PORT = ENV_VARS.PORT;
const __dirname = Path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/movie",protectRoute,movieRoutes)
app.use('/api/v1/tv',protectRoute,tvRoutes)
app.use('/api/v1/search', protectRoute, searchRoutes)

if(ENV_VARS.NODE_ENV === 'production'){
    app.use(express.static(Path.join(__dirname, '/Frontend/dist')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
    })
}

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}/api/v1/auth`);
    connectDB();
})