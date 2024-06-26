import express from 'express';
import { verifyToken } from '../utils/verifyToken.js';
import {
  createComment,
  deleteComment,
  editComment,
  getPostComments,
  getcomment,
  likeComment,
} from '../controllers/comment.controller.js';

const router = express.Router();


router.post('/create', verifyToken, createComment);
router.get('/getPostcomments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editComment/:commentId', verifyToken, editComment);
router.delete('/deleteComment/:commentId', verifyToken, deleteComment);
router.get('/getcomment',verifyToken, getcomment);

export default router;