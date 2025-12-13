"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<FormStatus>("idle");
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const validateField = (field: keyof FormData, value: string): string => {
        switch (field) {
            case "name":
                if (!value.trim()) return "Name is required";
                if (value.trim().length < 2) return "Name must be at least 2 characters";
                return "";
            case "email":
                if (!value.trim()) return "Email is required";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
                    return "Please enter a valid email";
                return "";
            case "message":
                if (!value.trim()) return "Message is required";
                if (value.trim().length < 10)
                    return "Message must be at least 10 characters";
                return "";
            default:
                return "";
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Validate on change if field has been touched
        if (touched[name]) {
            const error = validateField(name as keyof FormData, value);
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const error = validateField(name as keyof FormData, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {
            name: validateField("name", formData.name),
            email: validateField("email", formData.email),
            message: validateField("message", formData.message),
        };
        setErrors(newErrors);
        setTouched({ name: true, email: true, message: true });
        return !Object.values(newErrors).some((error) => error);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            // Shake animation on error
            return;
        }

        setStatus("loading");

        try {
            // Simulate API call - replace with EmailJS or Formspree integration
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Success!
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTouched({});

            // Reset after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const getInputClassName = (field: keyof FormData) => {
        const baseClass = "form-input";
        if (errors[field] && touched[field]) return `${baseClass} error`;
        if (touched[field] && !errors[field] && formData[field])
            return `${baseClass} success`;
        return baseClass;
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Name field */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your name"
                    className={getInputClassName("name")}
                    disabled={status === "loading"}
                />
                <AnimatePresence>
                    {errors.name && touched.name && (
                        <motion.p
                            className="form-error flex items-center gap-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Email field */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="your@email.com"
                    className={getInputClassName("email")}
                    disabled={status === "loading"}
                />
                <AnimatePresence>
                    {errors.email && touched.email && (
                        <motion.p
                            className="form-error flex items-center gap-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Message field */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`${getInputClassName("message")} resize-none`}
                    disabled={status === "loading"}
                />
                <AnimatePresence>
                    {errors.message && touched.message && (
                        <motion.p
                            className="form-error flex items-center gap-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <AlertCircle className="w-3 h-3" />
                            {errors.message}
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Submit button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <motion.button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="btn btn-primary w-full"
                    whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                    whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                >
                    <AnimatePresence mode="wait">
                        {status === "idle" && (
                            <motion.span
                                key="idle"
                                className="flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </motion.span>
                        )}
                        {status === "loading" && (
                            <motion.span
                                key="loading"
                                className="flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Sending...
                            </motion.span>
                        )}
                        {status === "success" && (
                            <motion.span
                                key="success"
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Check className="w-4 h-4" />
                                Message Sent!
                            </motion.span>
                        )}
                        {status === "error" && (
                            <motion.span
                                key="error"
                                className="flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <AlertCircle className="w-4 h-4" />
                                Try Again
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </motion.div>

            {/* Success message */}
            <AnimatePresence>
                {status === "success" && (
                    <motion.div
                        className="text-center p-4 rounded-lg bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <p className="text-[var(--accent-green)] font-medium">
                            Thank you for reaching out! I'll get back to you soon.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.form>
    );
}
