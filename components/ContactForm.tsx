"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { SITE_CONFIG } from "@/constants";
import { fadeInUp, defaultViewport } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { ContactFormData } from "@/types";

type FormStatus = "idle" | "submitting" | "success";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("submitting");

    const subject = encodeURIComponent(formData.subject || "Portfolio inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    await new Promise((resolve) => setTimeout(resolve, 300));
    setStatus("success");

    setTimeout(() => setStatus("idle"), 3500);
  };

  const fields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your name", half: true },
    { id: "email", label: "Email", type: "email", placeholder: "your@email.com", half: true },
    { id: "subject", label: "Subject", type: "text", placeholder: "Project inquiry", half: false },
  ] as const;

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
      onSubmit={handleSubmit}
      className="glass-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.id}
            className={cn("space-y-2", !field.half && "sm:col-span-2")}
          >
            <label
              htmlFor={field.id}
              className="block text-sm font-medium text-navy-700 dark:text-navy-200"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              required
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={(event) =>
                setFormData((previous) => ({ ...previous, [field.id]: event.target.value }))
              }
              className="w-full rounded-xl border border-navy-200 bg-white/50 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-navy-600 dark:bg-navy-800/50 dark:text-white dark:placeholder:text-navy-500"
            />
          </div>
        ))}

        <div className="space-y-2 sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-navy-700 dark:text-navy-200"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={(event) =>
              setFormData((previous) => ({ ...previous, message: event.target.value }))
            }
            className="w-full resize-none rounded-xl border border-navy-200 bg-white/50 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-navy-600 dark:bg-navy-800/50 dark:text-white dark:placeholder:text-navy-500"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          disabled={status === "submitting"}
          icon={<Send className="h-4 w-4" />}
        >
          {status === "submitting" ? "Opening email..." : "Send Message"}
        </Button>

        {status === "success" && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400"
          >
            <CheckCircle className="h-4 w-4" />
            Email draft opened.
          </motion.span>
        )}
      </div>
    </motion.form>
  );
}
