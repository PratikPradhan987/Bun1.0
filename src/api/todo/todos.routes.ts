import { Request, Response, Router } from "express";
import Todo from "./todos.model";

const router = Router();

router.get('/', (req: Request,res: Response<Todo[]>) => {
    res.json([{
        content: 'Learn TypeScript',
        done: false,
    }]);
})

// router.get<{}, Todo[]>('/', (req,res) => {
//     res.json([{
//         content: 'Learn TypeScript',
//         done: false,
//     }]);
// })

export default router;