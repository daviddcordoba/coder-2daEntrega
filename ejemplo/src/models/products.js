import mongoose from "mongoose";
import { categoryCollectionName } from "./categories.js";

export const productsCollectionName = 'products';

const productsSchema = new mongoose.Schema({
    name:{type: String, required:true},
    price: {type: Number,required: true},
    description: {type:String, required:true},
    stock: {type: Number, required: true},
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,//
        ref: categoryCollectionName,//
        required: true
    }
})

export const ProductsModel = mongoose.model(productsCollectionName,productsSchema)