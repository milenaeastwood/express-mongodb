import {Student} from '../models/studentModel.js';

export const getStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.json({data: students});
    } catch (error) {
        next(error);
    }
};

export const createStudent = async (req, res, next) => {
    const {name, first_name, email} = req.body;
    try {
        const newStudent = await Student.create({
            name,
            first_name,
            email
        });
        res.json({data: newStudent});
    } catch (error) {
        next(error);
    }
};

export const updateOneStudent = async (req, res, next) => {
    const {id} = req.params;
    const {first_name} = req.body;
    try {
        const updatedStudent = await Student.findOneAndUpdate(
            {_id: id},
            {first_name},
            {new: true, runValidators: true}
        );
        res.send({data: updatedStudent});
    } catch (error) {
        next(error);
    }
};

export const updateManyStudents = async (req, res, next) => {
    const {first_name: old_first_name} = req.params;
    const {first_name: new_first_name} = req.body;
    try {
        await Student.updateMany(
            { first_name: old_first_name },
            { $set: { first_name: new_first_name } }
        );
        const updatedStudents = await Student.find({ first_name: new_first_name });
        res.send({ data: updatedStudents });

    } catch (error) {
        next(error);
    }
};