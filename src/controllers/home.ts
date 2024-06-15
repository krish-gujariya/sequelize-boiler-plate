import { Request,Response } from "express-serve-static-core";
import { catchError } from "../helpers/usefullFunction";


export const home = async(req:Request, res:Response)=>{
    try {
        res.render("home");
        
    } catch (error) {
        return catchError(error);
    }
}