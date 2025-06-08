import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing again
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formState.loanType) {
      newErrors.loanType = 'Please select a loan type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      console.log('Form submitted:', formState);
      setFormState({
        name: '',
        email: '',
        phone: '',
        loanType: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  const locationRef = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-gray-600 text-lg mb-8">
              Have questions or need assistance? Our team is here to help you with all your loan needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Get In Touch" 
                subtitle="We're always ready to help with your loan inquiries. Reach out to us through any of these channels."
                alignment="left"
              />
              
              <div className="space-y-8 mt-10">
                <ContactInfo 
                  icon={<MapPin size={24} />} 
                  title="Our Location"
                  content="123 Finance Street, Business District, City, Country"
                />
                <ContactInfo 
                  icon={<Phone size={24} />} 
                  title="Phone Number"
                  content={<a href="tel:+11234567890" className="hover:text-primary transition-colors">+1 (123) 456-7890</a>}
                />
                <ContactInfo 
                  icon={<Mail size={24} />} 
                  title="Email Address"
                  content={<a href="mailto:info@diyoraconsultancy.com" className="hover:text-primary transition-colors">info@diyoraconsultancy.com</a>}
                />
                <ContactInfo 
                  icon={<Clock size={24} />} 
                  title="Office Hours"
                  content={
                    <>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </>
                  }
                />
              </div>
            </div>
            
            <div>
              <div className="bg-secondary rounded-lg shadow-lg p-8">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-6">Send Us a Message</h3>
                
                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="text-success-DEFAULT mb-4">
                      <CheckCircle size={48} />
                    </div>
                    <h4 className="font-serif text-xl font-semibold text-primary mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-600 text-center">
                      Thank you for contacting Diyora Consultancy. We've received your message and will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className={`
                            w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50
                            ${errors.name ? 'border-error-DEFAULT' : 'border-gray-300'}
                          `}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-error-DEFAULT text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`
                            w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50
                            ${errors.email ? 'border-error-DEFAULT' : 'border-gray-300'}
                          `}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-error-DEFAULT text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className={`
                            w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50
                            ${errors.phone ? 'border-error-DEFAULT' : 'border-gray-300'}
                          `}
                          placeholder="+1 (123) 456-7890"
                        />
                        {errors.phone && <p className="text-error-DEFAULT text-sm mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="loanType" className="block text-gray-700 font-medium mb-2">Loan Type</label>
                        <select
                          id="loanType"
                          name="loanType"
                          value={formState.loanType}
                          onChange={handleChange}
                          className={`
                            w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50
                            ${errors.loanType ? 'border-error-DEFAULT' : 'border-gray-300'}
                          `}
                        >
                          <option value="">Select Loan Type</option>
                          <option value="Education">Education Loan</option>
                          <option value="Mortgage">Mortgage Loan</option>
                          <option value="Home">Home Loan</option>
                          <option value="Business">Business Loan</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.loanType && <p className="text-error-DEFAULT text-sm mt-1">{errors.loanType}</p>}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`
                        w-full py-3 px-6 rounded-lg bg-primary text-white font-medium
                        ${formStatus === 'submitting' 
                          ? 'opacity-75 cursor-not-allowed' 
                          : 'hover:bg-primary-dark'
                        }
                        transition-colors duration-300
                      `}
                    >
                      {formStatus === 'submitting' ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send size={18} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Visit Our Office" 
            subtitle="Our office is conveniently located in the heart of the business district, easily accessible by public transportation."
          />
          
          <div 
            ref={locationRef.ref}
            className={`
              bg-white rounded-lg shadow-card p-4 overflow-hidden
              transform transition-all duration-700 ease-out
              ${locationRef.inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
          >
            <div className="h-[450px] w-full bg-gray-200 rounded flex items-center justify-center relative">
              {/* This would be replaced with an actual Google Maps iframe in a real implementation */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <MapPin size={48} className="text-primary opacity-30" />
              </div>
              <div className="text-center px-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-2">Google Maps Integration</h3>
                <p className="text-gray-600">
                  In a real implementation, this would display an interactive Google Map of our office location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to commonly asked questions about our loan consultation services."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <FaqItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Contact Info Component
const ContactInfo = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: React.ReactNode;
}) => {
  return (
    <div className="flex">
      <div className="text-accent-light mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-lg font-semibold text-primary mb-1">{title}</h3>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
};

// FAQ Item Component
const FaqItem = ({ 
  question, 
  answer,
  delay 
}: { 
  question: string; 
  answer: string;
  delay: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`
        border border-gray-200 rounded-lg overflow-hidden
        transform transition-all duration-500 ease-out
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
      >
        <span className="font-serif font-semibold text-primary">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div 
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="p-4 pt-0 text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

// FAQ Data
const faqData = [
  {
    question: "What types of loans do you provide consultation for?",
    answer: "We provide consultation for a wide range of loans including education loans, home loans, mortgage loans, business loans, personal loans, and loan refinancing."
  },
  {
    question: "How long does the loan consultation process typically take?",
    answer: "The consultation process typically takes 1-2 business days, while the complete loan processing time varies depending on the loan type and complexity, ranging from 1-4 weeks."
  },
  {
    question: "Do you charge fees for your consultation services?",
    answer: "Initial consultations are complimentary. Our fee structure varies based on the type of loan and services provided, which will be clearly communicated during your consultation."
  },
  {
    question: "How do I schedule an appointment with a loan consultant?",
    answer: "You can schedule an appointment by filling out the contact form on this page, calling our office, or sending us an email. We'll get back to you within 24 hours to set up a meeting."
  },
  {
    question: "Can I apply for a loan if I have a low credit score?",
    answer: "Yes, we work with clients across the credit spectrum. Our consultants can help identify suitable loan options even for those with less-than-perfect credit histories."
  }
];

export default Contact;