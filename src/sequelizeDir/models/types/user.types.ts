import { PartialBy } from "./index.model.type";

export interface UserInterface {
    id?:number;
    name?:string;
    email?:string;
    password?:string;
    createdAt:string|Date;
    updatedAt:string|Date;
    deletedAt:string|Date;

}

export type userCreationAtt = PartialBy<UserInterface,"id">;