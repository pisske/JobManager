import express from "express";
import testUser from "../middleware/testUser.js";
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobController.js";

router.route("/").post(testUser, createJob).get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/:id").delete(testUser, deleteJob).patch(updateJob);
export default router;
