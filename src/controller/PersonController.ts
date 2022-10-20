import { Request, Response } from "express";
import { AppDataSource } from "../database/AppDataSource";
import { Person } from "../entities/Person";
import { personRepository } from "../repositories/PersonRepository";

class PersonController{

    async create(req: Request, res: Response){

        const { firstName, lastName, phone, email, cpf } = req.body;

        let person = new Person(firstName, lastName, phone, email, cpf);


        person = await personRepository.save(person);

        return res.status(201).json(person);
    }

    async getAll(req: Request, res: Response){
        const persons = await personRepository.find();

        if(!persons){
            return res.status(404).json({ message: 'No persons found!'});
        }
        return res.status(200).json(persons);
    }

}

export {PersonController};