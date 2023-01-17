import {CategoryModel} from '../models/categories.js';

export const getAllCategories = async (req,res) => {
    try{
        console.log(this);
        const items = await CategoryModel.find();

        res.json({ // resultado para verlo en postman como json
            data: items
        })
    }
    catch(err){
        res.status(500).json({
            error: err.message,
            stack: err.stack
        })
    }
}

export const getCategoryById = async (req,res) => {
    try{
        const {id} = req.params;

        const item = await CategoryModel.findById(id);

        if(!item)
            return res.status(404).json({
                msgs: 'Categoria no encontrada..'
            })
        
        res.json({
            data: item
        })
    }
    catch(err){
        res.status(500).json({
            error: err.message,
            stack: err.stack
        })
    }
}

export const createcategory = async (req,res)=>{
    try{
        const {name,description} = req.body; // solicitud para crear categoria

        if( !name || !description){
            return res.status(400).json({
                msg:'No hay nombre o description'
            })
        }

        const newCategory = await CategoryModel.create({
            name,
            description
        })

        res.json({
            data: newCategory
        })
    }
    catch(err){
        res.status(500).json({
            error: err.message,
            stack: err.satck
        })
    }
}

export const updateCategory = async (req,res)=>{
    try{
        const {id} = req.params;
        const {name,description} = req.body;

        if( !name || !description){
            return res.status(400).json({
                msg: 'Error en nombre o descripcion'
            })
        }
        const categoryUpdated = await CategoryModel.findByIdAndUpdate(
            id,
            {name,description},
            {new: true}
        );

        res.json({
            msg: 'Categoria actualizada',
            category: categoryUpdated
        })
        
    }
    catch(err){
        res.status(500).json({
            msg: err.message,
            stack: err.stack
        })
    }
}


export const deleteCategory = async(req,res) => {
    try{
        const {id} = req.params;
        
        await CategoryModel.findByIdAndDelete(id);

        res.json({
            msg: 'Categoria eliminada'
        })
    }
    catch(err){
        res.status(500).json({
            msg: err.message,
            stack: err.satck
        })
    }
}