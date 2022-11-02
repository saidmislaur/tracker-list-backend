import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  desc: String,
  checked: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
})

export default mongoose.model('Task', TaskSchema)