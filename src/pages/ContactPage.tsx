
import { useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
});

const ContactHero = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Contact Us
          </h1>
          <div className="space-y-4 text-gray-600">
            <p className="text-lg">
              For general questions, please visit our{' '}
              <Link to="/faqs" className="text-heritage-500 hover:text-heritage-600 font-medium underline underline-offset-4">
                FAQs section
              </Link>.
            </p>
            <p className="text-lg">
              For any other general queries, feel free to message our team using the form below.
            </p>
            
            <div className="flex items-center gap-2 text-lg py-1">
              <Phone className="text-heritage-500" size={20} />
              <span>For faster responses, give us a call (or TEXT) at </span>
              <a 
                href="tel:8084273312" 
                className="text-heritage-500 hover:text-heritage-600 font-medium"
              >
                (808) 427-3312
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-lg py-1">
              <Mail className="text-heritage-500" size={20} />
              <span>Email us at </span>
              <a 
                href="mailto:go@redsuncapital.com"
                className="text-heritage-500 hover:text-heritage-600 font-medium"
              >
                go@redsuncapital.com
              </a>
            </div>
            
            <p className="text-lg pt-2">
              For loan scenario inquiries - please fill out the form below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // This is where you would integrate with GoHighLevel
      console.log("Form values:", values);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent",
        description: "Thank you! We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Could not send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Send Us a Message
          </h2>
          
          {/* Form placeholder - replace with GoHighLevel integration */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John Doe" 
                        className="rounded-md border-gray-300 focus:border-heritage-500 transition-all duration-200"
                        {...field} 
                      />
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
                    <FormLabel className="text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your@email.com" 
                        type="email"
                        className="rounded-md border-gray-300 focus:border-heritage-500 transition-all duration-200"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="(123) 456-7890" 
                        className="rounded-md border-gray-300 focus:border-heritage-500 transition-all duration-200"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help you?" 
                        className="rounded-md border-gray-300 focus:border-heritage-500 transition-all duration-200 min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-heritage-500 hover:bg-heritage-600 text-white transition-colors duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </form>
          </Form>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              By submitting this form, you agree to our{" "}
              <Link to="/privacy-notice" className="text-heritage-500 hover:underline">
                Privacy Policy
              </Link>
              {" "}and{" "}
              <Link to="/terms-of-service" className="text-heritage-500 hover:underline">
                Terms of Service
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  return (
    <MainLayout>
      <ContactHero />
      <ContactForm />
    </MainLayout>
  );
};

export default ContactPage;
