import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import {
  addVideoToPlaylist,
  createPlaylist,
  deletePlaylist,
  getPlaylistById,
  getUserPlaylist,
  removeVideoFromPlaylist,
  updatePlaylist,
} from "../controllers/playlist.controller";

const router = Router();

router.route("/user/:userId").get(verifyJwt, getUserPlaylist);
router.route("/").post(verifyJwt, createPlaylist);
router.route("/:playlistId").get(verifyJwt, getPlaylistById);
router.route("/video/:videoId").post(verifyJwt, addVideoToPlaylist);
router.route("/video/:videoId").delete(verifyJwt, removeVideoFromPlaylist);
router.route("/:playlistId").delete(verifyJwt, deletePlaylist);
router.route("/:playlistId").patch(verifyJwt, updatePlaylist);

export default router;