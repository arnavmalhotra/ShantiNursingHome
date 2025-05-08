"use client"

import { useState, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, Clock, MapPin, Phone, Mail } from "lucide-react"
import { format } from "date-fns"
import type { Metadata } from 'next';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Book Appointment - Shanti Nursing Home, Saharanpur",
  description: "Schedule your appointment with Dr. Vinita Malhotra at Shanti Nursing Home in Saharanpur. Fill out the form to request your preferred date and time.",
  openGraph: {
    title: "Book Appointment - Shanti Nursing Home",
    description: "Easily book your gynecology or obstetrics appointment online.",
  },
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  age: z.string().min(1, {
    message: "Age is required.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  time: z.string({
    required_error: "Please select a time slot.",
  }),
  appointmentType: z.string({
    required_error: "Please select an appointment type.",
  }),
  reason: z.string().min(5, {
    message: "Please provide a brief reason for your visit.",
  }),
})

export default function AppointmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailSetupNeeded, setEmailSetupNeeded] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      phone: "",
      email: "",
      date: undefined,
      time: "",
      appointmentType: "",
      reason: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Format the date for email
    const formattedDate = format(values.date, "PPP")

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          age: values.age,
          phone: values.phone,
          email: values.email,
          date: formattedDate,
          time: values.time,
          appointmentType: values.appointmentType,
          reason: values.reason,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: "Appointment Requested",
        description: "We'll contact you shortly to confirm your appointment.",
      })
      
      // Reset form with all default values
      form.reset({
        name: "",
        age: "",
        phone: "",
        email: "",
        date: undefined,
        time: undefined,
        appointmentType: undefined,
        reason: "",
      }, {
        keepDefaultValues: true
      })
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send appointment request. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const timeSlots = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Book an Appointment
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Schedule your visit with Dr. Vinita Malhotra at Shanti Nursing Home
          </p>
        </div>

        {emailSetupNeeded && (
          <Alert className="mb-6">
            <AlertTitle>Email Setup Required</AlertTitle>
            <AlertDescription>
              To receive email notifications, you need to set up EmailJS. Replace the service ID, template ID, and
              public key in the code with your own from EmailJS.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <Card className="lg:col-span-3">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Our Location</h3>
              <div className="aspect-[21/9] w-full rounded-md overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.1536701213997!2d77.55683767620589!3d29.956928274967822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeaa04a268cc7%3A0xbf48d0db6b75cbec!2sShanti%20Nursing%20Home!5e1!3m2!1sen!2sca!4v1746291883106!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card p-8">
              <Form {...form}>
                <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Enter your age" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Appointment Date</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              min={new Date().toISOString().split('T')[0]}
                              value={field.value ? field.value.toISOString().split('T')[0] : ''}
                              onChange={(e) => {
                                const date = e.target.value ? new Date(e.target.value) : undefined;
                                field.onChange(date);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a time slot" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="appointmentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Appointment Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select appointment type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general-checkup">General Checkup</SelectItem>
                            <SelectItem value="prenatal-care">Prenatal Care</SelectItem>
                            <SelectItem value="gynecological-exam">Gynecological Exam</SelectItem>
                            <SelectItem value="family-planning">Family Planning</SelectItem>
                            <SelectItem value="follow-up">Follow-up Visit</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason for Visit</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please briefly describe your symptoms or reason for the appointment"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>This helps us prepare for your appointment.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Request Appointment"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">Circular Road, Opposite Private Ward, SBD Hospital, Prakashpuram, Saharanpur</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 9410805042, +91 9412230586</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@shantinursinghome.in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Clinic Hours</p>
                      <p className="text-muted-foreground">Monday - Saturday: 11:00 AM - 3:00 PM</p>
                      <p className="text-muted-foreground">Evening: 6:30 PM - 8:00 PM</p>
                      <p className="text-muted-foreground">Sunday: 12:00 PM - 2:00 PM (By appointment only)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-lg font-medium">Important Information</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Appointments are subject to confirmation by our staff</li>
                  <li>Please arrive 15 minutes before your scheduled appointment</li>
                  <li>Bring any relevant medical records or test results</li>
                  <li>A 24-hour notice is required for cancellations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="rounded-lg border bg-muted p-6">
          <h3 className="text-lg font-medium mb-2">Emergency Contact</h3>
          <p className="text-muted-foreground">
            For medical emergencies, please call us at{" "}
            <span className="font-medium">+91 9410805042, +91 9412230586</span>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

