/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
import {Request, Response } from "express";
import { ResponseGeneric } from "../../interfaces/ResponseGeneric";
import { connection } from "../../conection";


export async function getAllStudents(req: Request, res: Response):  Promise <Response> {
    const conn = await connection();
        return await conn.query(`SELECT * from alumno` )
        .then((response)=>{
            console.log(response)
            return res.json(new ResponseGeneric(response[0], 0, ""));
        }).catch((error)=>{
            return res.json(new ResponseGeneric(null, -1, error.message));
        });
  
}