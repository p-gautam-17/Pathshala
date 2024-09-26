const { z } = require('zod');

const singupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "name must contain atleat 3 characters" })
        .max(255, { message: "Name must not be contain more than 255 characters" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid Email Address" })
        .min(3, { message: "Email must contain atleat 3 characters" })
        .max(255, { message: "Email must not be contain more than 255 characters" }),

    phone: z
        .string({ required_error: "Phone Number is required" })
        .trim()
        .min(10, { message: "Phone must contain atleat 10 characters" })
        .max(1024, { message: "Phone must not be contain more than 255 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .min(3, { message: "Password must contain atleat 7 characters" })
        .max(255, { message: "Password can't be contain more than 255 characters" }),
});

module.exports = singupSchema;