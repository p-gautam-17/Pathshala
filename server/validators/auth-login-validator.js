const { z } = require('zod');

const loginSchema = z.object({

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid Email Address" })
        .min(3, { message: "Email must contain atleat 3 characters" })
        .max(255, { message: "Email must not be contain more than 255 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .min(3, { message: "Password must contain atleat 7 characters" })
        .max(255, { message: "Password can't be contain more than 255 characters" }),
});

module.exports = loginSchema;