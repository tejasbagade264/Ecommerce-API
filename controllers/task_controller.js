
const Doctor= require('../models/User');
const Task= require('../models/task');


module.exports.create = async function(req, res) {
    try {
        const authenticatedUser = req.user;
        let taskData = req.body;
        taskData.createdBy = authenticatedUser._id; // Set createdBy with the user's ID
        let task = await Task.create(taskData);
        console.log(task);

        return res.status(201).json({
            message: 'Task created successfully',
            data: task
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}



module.exports.update = async function (req, res) {
    try {
        // Find the task by its unique ID
        const taskId = req.params.id; // Assuming you're passing the task ID in the URL
        const updatedData = req.body; // Data to update, e.g., { title, description, status }

        // Use findByIdAndUpdate to update the task
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            updatedData,
            { new: true } // This option returns the updated task in the response
        );

        if (!updatedTask) {
            return res.status(404).json({
                message: 'Task not found',
            });
        }

        return res.status(200).json({
            message: 'Task updated successfully',
            data: updatedTask,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }
    
};


module.exports.delete= async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};


 //Show the list of tasks 
 module.exports.tasks = async (req, res) => {
    try {
        // Assuming you have a user object in the request, which contains the authenticated user's information
        const authenticatedUser = req.user; // Adjust this based on your authentication setup
        console.log(authenticatedUser);
        // Retrieve tasks created by the authenticated user
        const tasks = await Task.find({ createdBy: authenticatedUser._id });
        
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};







