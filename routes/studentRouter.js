import {Router} from 'express';
import { getStudents, createStudent, updateOneStudent, updateManyStudents } from '../controllers/studentController.js';

export const studentRouter = Router();

studentRouter.route('/')
    .get(getStudents)
    .post(createStudent);

studentRouter.route('/:id')
    .put(updateOneStudent)

studentRouter.route('/:first_name')
    .put(updateManyStudents)