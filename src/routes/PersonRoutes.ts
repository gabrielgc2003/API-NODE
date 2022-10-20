import { Router } from "express";
import { PersonController } from "../controller/PersonController";

const personRouter = Router();
const personController = new PersonController;

personRouter.post('/', personController.create);
personRouter.get('/', personController.getAll);

export {personRouter};
