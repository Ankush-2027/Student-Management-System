const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        rollNo: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        },

        course: {
            type: String,
            required: true,
            trim: true
        },

        year: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },

        department: {
            type: String,
            required: true,
            trim: true
        },

        marks: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Student", studentSchema);