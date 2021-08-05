const studentModel=require('../Models/studentModels')
async function getAllStudent(req,res) {
    await studentModel.find()
}