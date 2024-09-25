import express from 'express'
const router = express.Router()
import { authjwt } from '../middleware/auth.middleware.js'
import { addToCart ,makePayment, getAllRental} from '../collection/rental.collection.js'

router.route('/create').post(authjwt, addToCart);
router.route('/payment').get(makePayment);
router.route('/orders').get(getAllRental)

export default router