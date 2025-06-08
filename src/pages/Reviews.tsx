import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { ChevronLeft, ChevronRight, PieChart } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const Reviews = () => {
  // For custom navigation
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Client Reviews</h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover what our clients say about their experience with Diyora Consultancy.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Testimonials" 
            subtitle="Hear directly from our satisfied clients about their experience with our loan consultation services."
          />
          
          <div className="relative">
            <div className="max-w-6xl mx-auto">
              <Slider ref={(slider) => setSliderRef(slider)} {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="px-3 pb-4">
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      testimonial={testimonial.testimonial}
                      rating={testimonial.rating}
                      image={testimonial.image}
                      loanType={testimonial.loanType}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            
            {/* Custom Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => sliderRef?.slickPrev()}
                className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => sliderRef?.slickNext()}
                className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Rate Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Success Rate" 
            subtitle="We take pride in our high success rate of loan approvals and client satisfaction."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg bg-white shadow-card p-8">
                <div className="flex items-center mb-6">
                  <PieChart size={32} className="text-accent mr-3" />
                  <h3 className="font-serif text-2xl font-semibold text-primary">Success Metrics</h3>
                </div>
                
                <div className="space-y-6">
                  {successMetrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{metric.name}</span>
                        <span className="font-bold text-primary">{metric.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{ width: `${metric.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Why Our Clients Trust Us</h3>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  At Diyora Consultancy, we've built our reputation on delivering results. Our high 
                  success rates are a testament to our expertise, industry knowledge, and dedication 
                  to finding the right financial solutions for our clients.
                </p>
                
                <p className="text-gray-600">
                  Our team works tirelessly to ensure that each loan application is meticulously prepared 
                  and presented to increase the chances of approval. We maintain strong relationships 
                  with lending institutions, giving us insights into their criteria and enabling us 
                  to match clients with the right lenders.
                </p>
                
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <div className="text-accent mt-1 mr-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600">Personalized loan strategies tailored to individual needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mt-1 mr-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600">Expert negotiation for competitive interest rates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mt-1 mr-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600">Detailed pre-assessment to determine eligibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mt-1 mr-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600">Regular follow-ups with lenders to track application status</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Client Success Stories" 
            subtitle="Real stories from real clients who achieved their financial goals with our help."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {clientStories.map((story, index) => (
              <ClientStoryCard 
                key={index}
                name={story.name}
                title={story.title}
                story={story.story}
                image={story.image}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

// Client Story Card Component
const ClientStoryCard = ({ 
  name, 
  title, 
  story, 
  image,
  delay 
}: { 
  name: string; 
  title: string; 
  story: string; 
  image: string;
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
        bg-white rounded-lg shadow-card overflow-hidden
        transform transition-all duration-500 ease-out
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:col-span-2">
          <h3 className="font-serif text-xl font-semibold text-primary mb-1">{name}</h3>
          <p className="text-accent font-medium mb-4">{title}</p>
          <p className="text-gray-600">{story}</p>
        </div>
      </div>
    </div>
  );
};

// Import for intersection observer
import { useInView } from 'react-intersection-observer';

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Teacher",
    testimonial: "Diyora Consultancy made my home loan process incredibly smooth. Their expertise and guidance helped me secure a loan with excellent terms that perfectly matched my needs.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    loanType: "Home"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    testimonial: "I was struggling to find the right education loan for my MBA program until I discovered Diyora Consultancy. Their personalized advice and industry connections secured me a loan with favorable terms.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    loanType: "Education"
  },
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    testimonial: "As a first-time entrepreneur, navigating business loans seemed daunting. Diyora Consultancy simplified everything, helping me secure the perfect financing solution for my startup.",
    rating: 4,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    loanType: "Business"
  },
  {
    name: "James Wilson",
    role: "Real Estate Investor",
    testimonial: "I've worked with multiple loan consultants before, but Diyora stands out for their detailed understanding of mortgage options. They found me terms that others couldn't match.",
    rating: 5,
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    loanType: "Mortgage"
  },
  {
    name: "Aisha Patel",
    role: "Doctor",
    testimonial: "Refinancing my existing loans through Diyora saved me thousands in interest. Their expertise in the refinancing process was invaluable, and I couldn't be happier with the results.",
    rating: 5,
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
    loanType: "Refinancing"
  },
  {
    name: "Robert Taylor",
    role: "Construction Manager",
    testimonial: "The team at Diyora helped me navigate the complexities of a construction loan for my custom home project. Their attention to detail and industry knowledge was exceptional.",
    rating: 4,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    loanType: "Home"
  }
];

// Success Metrics data
const successMetrics = [
  {
    name: "Loan Approval Rate",
    value: 95
  },
  {
    name: "Client Satisfaction",
    value: 98
  },
  {
    name: "Competitive Rates Secured",
    value: 94
  },
  {
    name: "Timely Processing",
    value: 97
  }
];

// Client Stories data
const clientStories = [
  {
    name: "The Singh Family",
    title: "First-Time Home Buyers",
    story: "As first-time homebuyers, we were overwhelmed by the mortgage process. Diyora Consultancy guided us through every step, helping us understand our options and secure a loan with an interest rate lower than we expected. Their expertise made our dream of homeownership a reality.",
    image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Technovate Startup",
    title: "Tech Business Launch",
    story: "Launching our tech startup required significant capital. The team at Diyora helped us navigate various business loan options, ultimately securing financing that provided the flexibility we needed for our early growth stages. Their strategic approach was instrumental to our successful launch.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Amanda Rodriguez",
    title: "International Education Journey",
    story: "Pursuing my Master's degree abroad seemed financially impossible until I consulted with Diyora. They helped me secure an education loan with favorable terms that covered not just tuition but living expenses too. Their expertise in international education financing was exactly what I needed.",
    image: "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Green Earth Construction",
    title: "Sustainable Building Project",
    story: "Our eco-friendly construction company needed specialized financing for a major project. Diyora Consultancy's deep understanding of commercial loans helped us secure the perfect financial package that aligned with our sustainable building timeline and unique cash flow patterns.",
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export default Reviews;