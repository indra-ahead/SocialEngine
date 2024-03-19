import express from "express";
import bodyParser from 'body-parser';
import session from 'express-session';
import next  from 'next';
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";
import api from  './routes/index.js';
import { errorHandler } from "./middleware/errorHandler.js";

//initializations
const dev = process.env.NODE_ENV !== 'production';
const app = express();
const nextApp = next({ dev });

//for file uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

//for req middlewares
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(` NEW REQUEST >>> [${timestamp}] ${req.method} ${req.url}`);
  next();
});


const handle = nextApp.getRequestHandler();
nextApp.prepare().then(() => {

  app.use(bodyParser.json());
  app.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }));
  app.use('/api', api);
  // error handling middleware
  app.use(errorHandler);
   // this serves to the next.js app routing
  app.get('*', (req, res) => {
    return handle(req, res);    
  });

  app.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
});
