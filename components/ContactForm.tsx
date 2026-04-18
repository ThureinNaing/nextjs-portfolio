"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
	Send,
	User,
	Mail,
	MessageSquare,
	Loader2,
	Terminal,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Please enter a valid email address"),
	subject: z.string().min(5, "Subject must be at least 5 characters"),
	message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { toast } = useToast();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		try {
			const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
			const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
			const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

			const templateParams = {
				from_name: data.name,
				from_email: data.email,
				subject: data.subject,
				message: data.message,
				to_email: "thuureinnnaingg412@gmail.com",
			};
			console.log("Sending email with params:", templateParams);

			await emailjs.send(
				serviceId,
				templateId,
				templateParams,
				publicKey,
			);

			toast({
				title: "Message Sent!",
				description:
					"Thank you for reaching out. I'll get back to you soon.",
			});

			reset();
		} catch (error) {
			console.log("EmailJS error:", error);
			toast({
				title: "Error",
				description:
					"Failed to send message. Please try again or contact me directly.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const inputClasses =
		"w-full px-4 py-3 bg-[#161b22] border border-slate-800 rounded-xl focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 text-white placeholder-slate-600 outline-none";
	const labelClasses =
		"flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2";

	return (
		<section id="contact" className="py-20 px-6 scroll-mt-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center mb-12"
			>
				<h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
					Get In Touch
				</h2>
				<p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
					Have a project in mind or just want to chat? I&apos;d love
					to hear from you. Let&apos;s create something amazing
					together!
				</p>
			</motion.div>

			<div className="max-w-2xl mx-auto relative group">
				{/* Background Glow Effect */}
				<div className="absolute -inset-1 bg-blue-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />

				<div className="relative bg-[#0d1117] border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-6 relative z-10"
					>
						{/* Name & Email Group (Side by side on MD screens) */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}
							>
								<label htmlFor="name" className={labelClasses}>
									<User className="w-3 h-3 mr-2 text-blue-400" />{" "}
									Name
								</label>
								<input
									id="name"
									type="text"
									{...register("name")}
									className={inputClasses}
									placeholder="John Doe"
								/>
								{errors.name && (
									<p className="text-red-400 text-xs mt-2">
										{errors.name.message}
									</p>
								)}
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
							>
								<label htmlFor="email" className={labelClasses}>
									<Mail className="w-3 h-3 mr-2 text-emerald-400" />{" "}
									Email
								</label>
								<input
									id="email"
									type="email"
									{...register("email")}
									className={inputClasses}
									placeholder="hello@example.com"
								/>
								{errors.email && (
									<p className="text-red-400 text-xs mt-2">
										{errors.email.message}
									</p>
								)}
							</motion.div>
						</div>

						{/* Subject Field */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							<label htmlFor="subject" className={labelClasses}>
								<MessageSquare className="w-3 h-3 mr-2 text-amber-400" />{" "}
								Subject
							</label>
							<input
								id="subject"
								type="text"
								{...register("subject")}
								className={inputClasses}
								placeholder="Project Inquiry"
							/>
							{errors.subject && (
								<p className="text-red-400 text-xs mt-2">
									{errors.subject.message}
								</p>
							)}
						</motion.div>

						{/* Message Field */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<label htmlFor="message" className={labelClasses}>
								<Terminal className="w-3 h-3 mr-2 text-purple-400" />{" "}
								Message
							</label>
							<textarea
								id="message"
								rows={5}
								{...register("message")}
								className={`${inputClasses} resize-none min-h-30`}
								placeholder="Tell me about your project..."
							/>
							{errors.message && (
								<p className="text-red-400 text-xs mt-2">
									{errors.message.message}
								</p>
							)}
						</motion.div>

						{/* Submit Button */}
						<motion.button
							type="submit"
							disabled={isSubmitting}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="w-full bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
						>
							{isSubmitting ? (
								<>
									<Loader2 className="w-5 h-5 animate-spin" />
									Sending...
								</>
							) : (
								<>
									<Send className="w-5 h-5" />
									Send Message
								</>
							)}
						</motion.button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
