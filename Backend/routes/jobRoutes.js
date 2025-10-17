import express from 'express'
import {addJob, getJob, updateJob, deleteJob} from '../controllers/jobTrackerController.js'

const router = express.Router();

router.post("/", addJob);
router.get("/", getJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;