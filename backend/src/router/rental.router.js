import express from 'express'
const router = express.Router()
import { authjwt } from '../middleware/auth.middleware.js'
import { addToCart ,makePayment} from '../collection/rental.collection.js'

router.route('/create').post(authjwt, addToCart);
router.route('/payment').get(makePayment);

export default router