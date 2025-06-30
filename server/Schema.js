import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    usertype: { type: String, enum: ['client', 'freelancer', 'admin'], required: true }
});
export const User = mongoose.model('User', userSchema);

const freelancerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    skills: [String],
    description: String,
    applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }],
    currentProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    completedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    funds: { type: Number, default: 0 }
});
export const Freelancer = mongoose.model('Freelancer', freelancerSchema);

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: Number, required: true },
    skills: [String],
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    clientName: String,
    clientEmail: String,
    postedDate: Date,
    bids: [mongoose.Schema.Types.ObjectId],
    bidAmounts: [Number],
    freelancerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Freelancer' },
    freelancerName: String,
    status: { type: String, default: 'Pending' },
    submission: Boolean,
    projectLink: String,
    manualLink: String,
    submissionDescription: String,
    submissionAccepted: Boolean
});
export const Project = mongoose.model('Project', projectSchema);

const applicationSchema = new mongoose.Schema({
    projectId: mongoose.Schema.Types.ObjectId,
    clientId: mongoose.Schema.Types.ObjectId,
    clientName: String,
    clientEmail: String,
    freelancerId: mongoose.Schema.Types.ObjectId,
    freelancerName: String,
    freelancerEmail: String,
    freelancerSkills: [String],
    title: String,
    description: String,
    budget: Number,
    requiredSkills: [String],
    proposal: String,
    bidAmount: Number,
    estimatedTime: String,
    status: { type: String, default: 'Pending' }
});
export const Application = mongoose.model('Application', applicationSchema);

const chatSchema = new mongoose.Schema({
    users: [String],
    messages: [{ senderId: String, text: String, timestamp: Date }]
});
export const Chat = mongoose.model('Chat', chatSchema);