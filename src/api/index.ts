import { Router } from "express"
import todos from "./todo/todos.routes"

const router = Router();

router.use('/todos', todos);

export default router;