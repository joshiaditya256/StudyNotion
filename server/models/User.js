// Import the Mongoose library
const mongoose = require("mongoose")

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
  {
    // Define the name field with type String, required, and trimmed
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    // Define the email field with type String, required, and trimmed
    email: {
      type: String,
      required: true,
      trim: true,
    },

    // Define the password field with type String and required
    password: {
      type: String,
      required: true,
    },
    // Define the role field with type String and enum values of "Admin", "Student", or "Visitor"
    accountType: {
      type: String,
      enum: ["Admin", "Student", "Instructor"],
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    approved: {
      type: Boolean,
      default: true,
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    token: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    image: {
      type: String,
    },
    courseProgress: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courseProgress",
      },
    ],

    // Add timestamps for when the document is created and last modified
  },
  { timestamps: true }
)

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema)



 //****************************************************************************************************************************************************** */
// new code to add functionalities of admin is below ------->>>>>


// // Import the Mongoose library
// const mongoose = require("mongoose");

// // Define the user schema using the Mongoose Schema constructor
// const userSchema = new mongoose.Schema(
//   {
//     // First name of the user
//     firstName: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     // Last name of the user
//     lastName: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     // Email address with unique constraint and format validation
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//       match: [/\S+@\S+\.\S+/, "Please use a valid email address"], // Basic email format validation
//     },
//     // Password
//     password: {
//       type: String,
//       required: true,
//     },
//     // User role
//     accountType: {
//       type: String,
//       enum: ["Admin", "Student", "Instructor"],
//       required: true,
//     },
//     // Account active status
//     active: {
//       type: Boolean,
//       default: true,
//     },
//     // Approval status (e.g., for instructors)
//     approved: {
//       type: Boolean,
//       default: true,
//     },
//     // Reference to the Profile schema for additional user details
//     additionalDetails: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Profile",
//       required: true,
//     },
//     // References to courses created or enrolled
//     courses: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Course",
//       },
//     ],
//     // Token for authentication or password reset
//     token: {
//       type: String,
//     },
//     // Token expiration for password reset
//     resetPasswordExpires: {
//       type: Date,
//     },
//     // Profile image URL
//     image: {
//       type: String,
//     },
//     // References to course progress
//     courseProgress: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "courseProgress",
//       },
//     ],

//     // Fields specific to instructors
//     instructorDetails: {
//       bio: { type: String, trim: true }, // Short biography
//       expertise: { type: [String], default: [] }, // List of areas of expertise
//       status: {
//         type: String,
//         enum: ["pending", "approved", "rejected"], // Approval status
//         default: "pending",
//       },
//     },
//   },
//   {
//     timestamps: true, // Automatically add createdAt and updatedAt fields
//   }
// );

// // Export the Mongoose model for the user schema, using the name "User"
// module.exports = mongoose.model("User", userSchema);
