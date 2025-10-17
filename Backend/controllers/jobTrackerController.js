import jobSchema from "../models/jobSchema.js";

// Add new job...
export const addJob = async(req, res) => {
    try {
        const job = new jobSchema(req.body);
        await job.save();
        res.status(201).json(job);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

// Get all jobs...
export const getJob = async(req, res) => {
    try {
        const jobs = await jobSchema.find();
        res.json(jobs);
    }catch(err) {
        res.status(500).json({message: err.message});
    }
};

// Update job...
export const updateJob = async(req, res) => {
    try {
        const updated = await jobSchema.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updated);
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
};

// Delete job..
export const deleteJob = async(req, res) => {
    try {
        await jobSchema.findByIdAndDelete(req.params.id);
        res.json({message: "Job deleted successfully" });
    }catch(err) {
        res.status(500).json({message:err.message});
    }
};