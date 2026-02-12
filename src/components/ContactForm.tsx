"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    service: z.string({
        required_error: "Please select a service.",
    }),
    customService: z.string().optional(),
    countryCode: z.string({
        required_error: "Select country code.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
}).refine((data) => {
    if (data.service === "other" && !data.customService) {
        return false;
    }
    return true;
}, {
    message: "Please specify your service interest.",
    path: ["customService"],
});

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            countryCode: "+1",
            service: "",
            customService: "",
        },
    });

    const watchService = form.watch("service");

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Build email body with form data
        const serviceName = values.service === "other"
            ? values.customService
            : values.service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        const emailBody = `
Name: ${values.name}
Email: ${values.email}
Phone: ${values.countryCode} ${values.phone}
Service Interest: ${serviceName}

---
This message was sent via the InfoSavi contact form.
        `.trim();

        const subject = `New Contact Form Submission from ${values.name}`;
        const mailtoLink = `mailto:contact@infosavi.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;

        toast.success("Opening your email client...");
        form.reset();
    }

    return (
        <div className="p-8">
            <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-4 gap-2">
                        <FormField
                            control={form.control}
                            name="countryCode"
                            render={({ field }) => (
                                <FormItem className="col-span-1">
                                    <FormLabel className="text-white">Code</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="+1" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="+1">🇺🇸 +1</SelectItem>
                                            <SelectItem value="+91">🇮🇳 +91</SelectItem>
                                            <SelectItem value="+44">🇬🇧 +44</SelectItem>
                                            <SelectItem value="+61">🇦🇺 +61</SelectItem>
                                            <SelectItem value="+86">🇨🇳 +86</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="col-span-3">
                                    <FormLabel className="text-white">Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="(555) 000-0000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Service Interest</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="digital-workplace">Digital Workplace Services</SelectItem>
                                        <SelectItem value="service-management">Service Management</SelectItem>
                                        <SelectItem value="cloud-consulting">Cloud Consulting</SelectItem>
                                        <SelectItem value="oaas">OaaS</SelectItem>
                                        <SelectItem value="other">Other (Custom Service)</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {watchService === "other" && (
                        <FormField
                            control={form.control}
                            name="customService"
                            render={({ field }) => (
                                <FormItem className="animate-fade-in">
                                    <FormLabel className="text-white">Specify Service</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Describe the service you need..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white mt-2">
                        Send Message
                    </Button>
                </form>
            </Form>
        </div>
    );
}
