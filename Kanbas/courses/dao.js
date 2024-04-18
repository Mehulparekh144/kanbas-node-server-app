import model from './model.js';

export const findAllCourses = async () => { return await model.find(); };
export const createCourse = async (course) => {
    delete course._id;
    const courseCreated = await model.create(course);
    return courseCreated;
}
export const deleteCourse = async(courseId) => {
    await model.deleteOne({id : courseId});
}
export const updateCourse = async(courseId , course) => {
    await model.updateOne({id : courseId}, { $set: course });
}
export const findCourseById = async(courseId) => {
    return await model.findOne({id : courseId});
}