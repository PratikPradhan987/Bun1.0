import express from 'express';
import { Request, Response, NextFunction } from 'express';

export function createServer() {
    const app = express();

    app.get("/", (req: Request , res: Response, next: NextFunction) => {
        res.send("BUN Done");
    })

    return app;
}