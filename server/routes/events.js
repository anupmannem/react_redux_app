import express from 'express';

import authenticate from '../middlewares/authenticate';

const router = express.Router();

router.post('/', authenticate, (req, res) => {
  console.log({ user: req.currentUser });
  res.status(201).json({ success: true });
});

export default router;
