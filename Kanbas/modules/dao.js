import model from './model.js';
export const findAllModules =  async (courseId) => {
    return await model.find({course: courseId});
};

export const createModule = async (courseId , module) => {
    delete module._id;
    const moduleCreated = await model.create({...module , course: courseId});
    return moduleCreated;
}

export const updateModule = async (moduleId , module) => {
    await model.updateOne({ _id: moduleId }, { $set: module });
}
export const deleteModule = async (moduleId) => {
    await model.deleteOne({_id : moduleId});
}