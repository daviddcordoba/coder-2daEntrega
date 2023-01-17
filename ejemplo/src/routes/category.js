import { Router } from "express";
import{
    getAllCategories,
    getCategoryById,
    createcategory,
    updateCategory,
    deleteCategory,
} from '../controllers/categories.js';

const router = Router();

router.get('/',getAllCategories);

router.get('/:id',getCategoryById);

router.post('/',createcategory);

router.put('/:id',updateCategory);

router.delete('/:id',deleteCategory);

export default router;

