import { CategoryModel } from '../models/categories.js';
import {ProductsModel} from '../models/products.js';

export const checkBodyProduct = async (req,res,next) => {
    const {name,price,description,stock,categoryId} = req.body;

    if(!name || !price || !description || !stock || !categoryId){
        res.status(400).json({
            msg: 'Algo fallo en el body' // no me muestra esto????
        })
    }

    const category = await CategoryModel.findById(categoryId);

    if(!category){
        res.status(400).json({
            msg: "La categoria no existe"
        })
    }

    next()
}

export const getAllProducts = async (req,res) => {
    try{
        /* console.log(this); */
        const items = await ProductsModel.find();

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

    // podria agregar algo para q me traiga los productos de determinada categoria
}

export const getProductById = async (req,res) => {
    try{
        const {id} = req.params;

        const item = await ProductsModel.findById(id);

        if(!item)
            return res.status(404).json({
                msgs: 'Producto no encontrado..'
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

export const createProduct = async (req,res)=>{
    try{
        const {name,price,description,stock,categoryId} = req.body; // solicitud para crear categoria // lo que yo le mando en raw-json
        
        const newProduct = await ProductsModel.create({
            name,
            price,
            description,
            stock,
            categoryId
        })

        res.json({
            data: newProduct
        })
    }
    catch(err){
        res.status(500).json({
            error: err.message,
            stack: err.satck
        })
    }
}

export const updateProduct = async (req,res)=>{
    try{
        const {id} = req.params;
        const {name,price,description,stock,categoryId} = req.body;

        
        const productUpdated = await ProductsModel.findByIdAndUpdate(
            id,
            {name,price,description,stock,categoryId},
            {new: true}
        );

        res.json({
            msg: 'Producto actualizado',
            category: productUpdated
        })
        
    }
    catch(err){
        res.status(500).json({
            msg: err.message,
            stack: err.stack
        })
    }
}


export const deleteProduct = async(req,res) => {
    try{
        const {id} = req.params;
        
        await ProductsModel.findByIdAndDelete(id);

        res.json({
            msg: 'Producto eliminado'
        })
    }
    catch(err){
        res.status(500).json({
            msg: err.message,
            stack: err.satck
        })
    }
}

