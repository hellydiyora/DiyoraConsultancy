import { 
  GraduationCap, 
  Home as HomeIcon, 
  Building, 
  Briefcase, 
  RefreshCw,
  CreditCard,
  Calculator,
  FileText
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import CallToAction from '../components/CallToAction';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Our Loan Services</h1>
            <p className="text-gray-600 text-lg mb-8">
              Explore our comprehensive range of loan consultation services 
              designed to meet your unique financial needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Core Loan Services" 
            subtitle="We provide expert consultation across a wide spectrum of loan products to help you make informed financial decisions."
          />
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <ServiceDetailCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.image}
                icon={service.icon}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Additional Financial Services" 
            subtitle="Beyond our core loan services, we offer specialized financial assistance to address diverse needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <AdditionalServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Consultation Process" 
            subtitle="A seamless and transparent approach to getting you the loan you need."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {processSteps.map((step, index) => (
                <ProcessStep 
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  isLast={index === processSteps.length - 1}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

// Service Detail Card Component
const ServiceDetailCard = ({ 
  title, 
  description, 
  features, 
  image, 
  icon,
  reverse 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  image: string; 
  icon: React.ReactNode;
  reverse: boolean;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
      <div className={`${reverse ? 'lg:order-2' : ''}`}>
        <div 
          className={`
            transform transition-all duration-700 ease-out
            ${inView ? (reverse ? 'translate-x-0' : 'translate-x-0') : (reverse ? 'translate-x-10' : '-translate-x-10')} 
            ${inView ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className="flex items-center mb-4">
            <div className="text-accent p-3 bg-accent/10 rounded-full mr-4">
              {icon}
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary">{title}</h3>
          </div>
          
          <p className="text-gray-600 mb-6">{description}</p>
          
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="text-accent mt-1 mr-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className={`${reverse ? 'lg:order-1' : ''}`}>
        <div 
          className={`
            relative rounded-lg overflow-hidden shadow-lg
            transform transition-all duration-700 ease-out
            ${inView ? (reverse ? '-translate-x-0' : 'translate-x-0') : (reverse ? '-translate-x-10' : 'translate-x-10')} 
            ${inView ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-primary/10"></div>
        </div>
      </div>
    </div>
  );
};

// Additional Service Card Component
const AdditionalServiceCard = ({ 
  title, 
  description, 
  icon,
  delay 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  delay: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`
        bg-white rounded-lg shadow-card p-6 h-full
        transform transition-all duration-500 ease-out
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        hover:shadow-lg transition-shadow duration-300
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-accent mb-4 p-3 bg-accent/10 inline-block rounded-full">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Process Step Component
const ProcessStep = ({ 
  number, 
  title, 
  description, 
  isLast,
  delay
}: { 
  number: number; 
  title: string; 
  description: string; 
  isLast: boolean;
  delay: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="relative">
      <div className="flex">
        <div className="flex flex-col items-center">
          <div 
            className={`
              flex items-center justify-center w-12 h-12 rounded-full border-4 border-secondary bg-primary text-white font-bold z-10
              transform transition-all duration-500 ease-out
              ${inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
            `}
            style={{ transitionDelay: `${delay}ms` }}
          >
            {number}
          </div>
          {!isLast && (
            <div 
              className={`
                w-0.5 bg-primary-light/30 h-24 transform transition-all duration-500 ease-out
                ${inView ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
              `}
              style={{ transitionDelay: `${delay + 200}ms` }}
            ></div>
          )}
        </div>
        <div className="ml-6 pb-8">
          <h3 
            className={`
              font-serif text-xl font-semibold text-primary mb-2
              transform transition-all duration-500 ease-out
              ${inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
            `}
            style={{ transitionDelay: `${delay + 100}ms` }}
          >
            {title}
          </h3>
          <p 
            className={`
              text-gray-600
              transform transition-all duration-500 ease-out
              ${inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
            `}
            style={{ transitionDelay: `${delay + 200}ms` }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Services Data
const services = [
  {
    title: "Education Loan",
    description: "Finance your academic journey with our specialized education loan consultation services for both domestic and international studies.",
    features: [
      "Expert guidance on loan options for various educational programs",
      "Assistance with documentation and application process",
      "Tie-ups with leading banks and financial institutions",
      "Special rates for premier institutions and merit students",
      "Consultation on education loan tax benefits"
    ],
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <GraduationCap size={24} />
  },
  {
    title: "Mortgage Loan",
    description: "Secure the ideal mortgage loan for your property purchase with our comprehensive consultation services.",
    features: [
      "Personalized mortgage options for salaried and self-employed individuals",
      "Competitive interest rates through our banking partners",
      "Guidance on documentation and eligibility requirements",
      "Refinancing options for existing mortgage loans",
      "Balance transfer assistance for better rates"
    ],
    image: "https://images.pexels.com/photos/5926435/pexels-photo-5926435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <HomeIcon size={24} />
  },
  {
    title: "Home Loan",
    description: "Make your dream home a reality with our expert home loan consultation services designed to meet your specific needs.",
    features: [
      "Comprehensive guidance for first-time home buyers",
      "Property valuation assistance",
      "Documentation support and application processing",
      "Specialized solutions for construction and renovation",
      "Home loan top-up options for existing customers"
    ],
    image: "https://images.pexels.com/photos/7578989/pexels-photo-7578989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <Building size={24} />
  },
  {
    title: "Business Loan",
    description: "Fuel your business growth with our specialized business loan consultation services for startups, SMEs, and established companies.",
    features: [
      "Tailored loan solutions for various business requirements",
      "Working capital loan consultation",
      "Equipment and machinery financing options",
      "Project financing for expansion plans",
      "Collateral and non-collateral based loan guidance"
    ],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <Briefcase size={24} />
  }
];

// Additional Services Data
const additionalServices = [
  {
    title: "Loan Refinancing",
    description: "Optimize your existing loans by switching to better interest rates and terms through our refinancing consultation.",
    icon: <RefreshCw size={24} />
  },
  {
    title: "Credit Card Consultation",
    description: "Navigate the complex world of credit cards with our expert guidance to find the right card for your lifestyle and needs.",
    icon: <CreditCard size={24} />
  },
  {
    title: "Financial Planning",
    description: "Comprehensive financial planning services to help you achieve your short-term and long-term financial goals.",
    icon: <Calculator size={24} />
  },
  {
    title: "Documentation Assistance",
    description: "Expert help with preparing and organizing all necessary documentation for loan applications to ensure smooth processing.",
    icon: <FileText size={24} />
  },
  {
    title: "Loan Restructuring",
    description: "Professional guidance on restructuring existing loans to better suit your current financial situation and needs.",
    icon: <RefreshCw size={24} />
  },
  {
    title: "Eligibility Assessment",
    description: "Detailed analysis of your financial profile to determine your eligibility for various loan products and optimal borrowing capacity.",
    icon: <Calculator size={24} />
  }
];

// Process Steps Data
const processSteps = [
  {
    title: "Initial Consultation",
    description: "We begin with a comprehensive discussion about your financial needs, goals, and current situation to understand your requirements better."
  },
  {
    title: "Loan Option Analysis",
    description: "Our experts analyze various loan products from multiple lenders to identify the options best suited to your specific needs and circumstances."
  },
  {
    title: "Documentation Guidance",
    description: "We guide you through the documentation process, helping you prepare and organize all necessary paperwork for a successful application."
  },
  {
    title: "Application Submission",
    description: "Our team assists in completing and submitting your loan application to the selected financial institutions with proper follow-up."
  },
  {
    title: "Approval & Disbursement",
    description: "We work with the lender to expedite the approval process and ensure timely disbursement of your loan amount."
  }
];

export default Services;