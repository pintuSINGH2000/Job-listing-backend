const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
    jobPosition: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    locationType: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    companyDescription: {
      type: String,
      required: true,
    },
    information: {
      type: String,
      require: true,
    },
    duration: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    creater: {
      type: mongoose.ObjectId,
      required:true,
    },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("Job", jobSchema);
