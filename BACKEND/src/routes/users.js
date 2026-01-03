import express from 'express'

const router = express.Router();

router.get('/new', async(req, res) => {
  res.send('user saved');
})

export default router;



