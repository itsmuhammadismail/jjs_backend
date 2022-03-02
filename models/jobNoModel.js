import mongoose from "mongoose";

const jobNoSchema = mongoose.Schema({
  job: Number,
});

export default mongoose.model("jobNo", jobNoSchema);
