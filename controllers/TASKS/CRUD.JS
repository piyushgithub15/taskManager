const todoList = require("../../models/task_models");

const createtask = async  (req, res) => {
    try{
        const {
            task,timeReq
             } = req.body;
        const todotask =await todoList.create({
            task,timeReq
             });
        res.status(201).json({
            success:true,
            message: 'TASK IS ADDED TO THE LIST'
        })
        await todotask.save();
    }
    catch(err){
            console.log(err);
            res.status(500).json({
                success:false,
                message:err.message
            })
    }
    
}
const showTask = async  (req, res) => {
    try{
       const {
        sort
       }=req.query;
        const list = await todoList.find({}).sort(sort);
        if(!list)
        {
            console.log("NO LIST IS THERE");
            res.status(400).send("list is not there");
        }
        res.status(201).json(list)
    }
    catch(err){
        console.log(err);
            res.status(500).json({
                success:false,
                message:err.message
            })

    }
    
}
const deleteTask = async  (req, res) => {
    try{
        const id = req.params.id;
        
        
        //const task = await todoList.findById({id});
        await todoList.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message : "TASK DELETED SUCCESSFULLY"
        })
    
    }
    catch(err){
        console.log(err);
            res.status(500).json({
                success:false,
                message:err.message
            })

    }
    
}
const updateTask = async  (req, res) => {
    try{
        await todoList.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true
        });
        res.status(200).json({
            success: true,
            message: 'Task Updated'
        });
    }
    catch(err){
        console.log(err);
            res.status(500).json({
                success:false,
                message:err.message
            })

    }
    
}
module.exports ={createtask,updateTask,deleteTask,showTask};