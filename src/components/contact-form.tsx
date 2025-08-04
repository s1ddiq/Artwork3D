"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { getFingerprint } from "@/lib/fingerprint";

// 1. Define Zod schema for form validation!

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

// 2. Infer form values type from the schema!

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  // 3. Set up the form using React Hook Form + Zod...!
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema), // use Zod for validation
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 4. What happens when form is submitted?

  const onSubmit = async (data: ContactFormValues) => {
    // console.log(`FORM SUBMITTED:`, data);
    // Here you would typically send the data to your server or API
    const fingerprint = await getFingerprint(); // Replace with actual fingerprint logic if needed

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          sent_from: fingerprint,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Server Error, something went wrong");
        // Show error toast here
        return;
      }
      //  🎉  if it worked
      form.reset(); // reset the form after submission (optional)
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className=" flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-zinc-900/80 border border-zinc-800 rounded-2xl shadow-xl p-8 backdrop-blur-lg">
        <h2 className="text-2xl font-extralight tracking-widest mb-6 text-center text-white">
          Contact Me
        </h2>

        {/* ShadCN Form wrapper */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-300">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-300">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="you@example.com"
                      {...field}
                      className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-300">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      minLength={10}
                      placeholder="Let me know what you want to create..."
                      {...field}
                      className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full shadow-lg">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
