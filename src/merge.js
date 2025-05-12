import { Router } from 'express';
import { mergeDateRanges } from './mergeDateRanges.js'; 

const router = Router();

router.post('/', (req, res) => {
  try {
    const output = mergeDateRanges(req.body);
    res.json(output);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
