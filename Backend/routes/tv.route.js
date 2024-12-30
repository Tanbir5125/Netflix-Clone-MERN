import express from 'express';
import { getTrendingShows,
            getShowTrailer,
            getShowDetails,
            getSimilarShows,
            getShowsByCategory
 } from '../controllers/tv.controller.js';

const router = express.Router();


router.get('/trending', getTrendingShows);
router.get('/:id/trailer', getShowTrailer);
router.get('/:id/details', getShowDetails);
router.get('/:id/similar', getSimilarShows);
router.get('/:category', getShowsByCategory);

export default router;