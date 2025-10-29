import {Router} from 'express'
import { verifyJWT } from '../middleware/auth.middleware.js'
import { createTask, getTasks, deleteTask, updateTaskStatus } from '../controllers/task.controller.js'


const router = Router();

router.use(verifyJWT)

router.route("/").post(createTask);
router.route("/").get(getTasks);
router.route("/:id").put(updateTaskStatus);
router.route("/:id").delete(deleteTask)

export default router