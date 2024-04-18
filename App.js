import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from 'cors';
import mongoose from 'mongoose';
import CourseRoutes from './Kanbas/courses/routes.js';
import ModuleRoutes from './Kanbas/modules/routes.js';
import UserRoutes from './Kanbas/Users/routes.js';
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import session from 'express-session';
import "dotenv/config";
const app = express()
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/kanbas'

mongoose.connect(CONNECTION_STRING);

app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
}));


const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}

app.use(
    session(sessionOptions)
);


app.use(express.json());
UserRoutes(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000);

