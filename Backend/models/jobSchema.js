import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    company: {type: String, required: true},
    role:{type: String, required: true},
    jobLink: {type: String},
    applicationDate: {type: Date, default: Date.now},
    status: {
        type: String,
        enum: ["Applied", "Interview", "Offer", "Rejected"],
        default: "Applied"
    },
    notes: {type: String}
}, {timestamps: true});

export default mongoose.model("Job", jobSchema);