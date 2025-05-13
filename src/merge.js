import { Router } from 'express';
import { mergeRanges } from './mergeRanges.js'; 

const router = Router();

router.post('/', (req, res) => {
  try {
    const output = mergeRanges(req.body);
    res.json(output);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
