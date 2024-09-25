import express from 'express'
import {createRental,    getAllRentals,    getRentalById,    updateRental,    deleteRental,}  from "../controllers/rental.controller"
import { authjwt } from '../middleware/auth.middleware';
const router = express.Router();

// router.post('/rentals', createRental);
router.route('/createrental').post(authjwt, createRental)      
// router.get('/rentals', getAllRentals);  
router.route('/getall').get(getAllRentals)         
// router.get('/rentals/:id', getRentalById);
router.route('/rental/:id').get(getRentalById)       
// router.put('/rentals/:id', updateRental);
router.route('/rentaldetail/:id').patch(updateRental)        
// router.delete('/rentals/:id', deleteRental);
router.route('/deleterental/:id').delete(deleteRental)     

export default router