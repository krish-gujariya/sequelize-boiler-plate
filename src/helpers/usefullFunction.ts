
import { NextFunction, Response, Request } from "express";
import Joi from "joi";
import argon2 from "argon2";
import { logger } from "../utils/pino";


// Function for generate hash password
const genPassword = async (passString: string) => {
  return await argon2.hash(passString);
};



// Common code block to send fetched data in response json
const   fetchResponseFunc = (
  res: Response,
  data:any,
  message?:string,
  
) => {
  if (data.success) {
    res.status(data.statusCode).json({success:true, message:message, data:data.result})
  } else {
    res.status(data.statusCode).json({success:false, message:message, data:data.result})
  }
};

// code block to show validation error message 
const validationStatus = (req:Request,res:Response,next:NextFunction,error?:Joi.ValidationError)=>{
  if(error){
    res.status(400).json({success:false, message:error.message})
  }
  else{
    next();
  }
}

// function for common format return object 
const returnObjectFunction = (flag:boolean,code:number, message?:string, data?:any)=>{
  return { success:flag, message:message, result:data, statusCode:code}
}

const catchError = (error:unknown)=>{
  logger.error(error);
  return returnObjectFunction(false, 500,`Something Went wrong...`)
}

export const retrivedFailure = (message:string)=>{
  return returnObjectFunction(false,404,message);
}

export const validationSuccessfull = ()=>{return returnObjectFunction(true,201, `Validation Successfull...`)}

export const userNotExist = () => {
  return returnObjectFunction(false, 404, `User does'nt exists...`);
};


export const  filevalidationFail = ( res:Response)=>{
  
    res.status(400).json({success:false, messsage:`File must be type of valid image format`})
    return true    
}

export {
  genPassword,
  fetchResponseFunc,
  validationStatus,
  returnObjectFunction,
  catchError
};

