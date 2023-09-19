import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { Request, Response, NextFunction } from 'express';

export function createServer() {
    const app = express();

    app.use(morgan('dev'));
    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    app.get("/", (req: Request , res: Response, next: NextFunction) => {
        res.send("BUN Done");
    })

    return app;
}