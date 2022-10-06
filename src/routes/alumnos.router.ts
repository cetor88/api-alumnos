/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line simple-import-sort/imports

import { Router } from "express";
import { getAllStudents } from "../controllers/alumno/alumnos.controller";

const alumnosRouter = Router();

alumnosRouter.route('/').get(getAllStudents);

export default alumnosRouter;
