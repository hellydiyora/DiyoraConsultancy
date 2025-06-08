import { 
  GraduationCap, 
  Home as HomeIcon, 
  Building, 
  Briefcase, 
  RefreshCw 
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import AnimatedCounter from '../components/AnimatedCounter';
import CallToAction from '../components/CallToAction';

const Home = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center"
      >
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto md:ml-0">
            <h1 
              className={`
                font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6
                transform transition-all duration-700 ease-out
                ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
            >
              Your Trusted Partner in Loan Solutions
            </h1>
            <p 
              className={`
                text-xl text-secondary mb-8 max-w-xl
                transform transition-all duration-700 delay-200 ease-out
                ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
            >
              At Diyora Consultancy, we specialize in providing expert guidance 
              for all your loan needs, helping you secure the best financial solutions 
              for your future.
            </p>
            <div 
              className={`
                space-x-4
                transform transition-all duration-700 delay-400 ease-out
                ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
            >
              <a 
                href="/services" 
                className="
                  bg-accent hover:bg-accent-light text-primary-dark font-medium 
                  px-6 py-3 rounded-lg inline-block transition-all duration-300
                "
              >
                Explore Services
              </a>
              <a 
                href="/contact" 
                className="
                  bg-transparent hover:bg-white/10 text-white border border-white 
                  font-medium px-6 py-3 rounded-lg inline-block transition-all duration-300
                "
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Loan Services" 
            subtitle="We offer comprehensive consultation for a wide range of loan needs, ensuring you find the perfect financial solution."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Education Loan" 
              description="Fund your academic aspirations with our specialized education loan consulting for domestic and international studies."
              icon={<GraduationCap />}
              delay={0}
            />
            <ServiceCard 
              title="Mortgage Loan" 
              description="Get expert guidance on mortgage options for property purchase, with solutions tailored for both salaried and business professionals."
              icon={<HomeIcon />}
              delay={150}
            />
            <ServiceCard 
              title="Home Loan" 
              description="Make your dream home a reality with our comprehensive home loan processing and eligibility consultation services."
              icon={<Building />}
              delay={300}
            />
            <ServiceCard 
              title="Business Loan" 
              description="Fuel your business growth with our expert consulting on startup financing, small business loans, and expansion capital."
              icon={<Briefcase />}
              delay={450}
            />
            <ServiceCard 
              title="Loan Refinancing" 
              description="Optimize your existing loans with our refinancing consultation services to secure better terms and lower interest rates."
              icon={<RefreshCw />}
              delay={600}
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedCounter end={15} suffix="+" title="Years Experience" />
            <AnimatedCounter end={8500} suffix="+" title="Happy Clients" />
            <AnimatedCounter end={42} title="Partnered Banks" />
            <AnimatedCounter end={95} suffix="%" title="Success Rate" />
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Who We Are" 
                subtitle="Diyora Consultancy is a leading loan advisory firm dedicated to helping individuals and businesses navigate the complex world of financing with ease and confidence."
                alignment="left"
                isDark={true}
              />
              <p className="text-secondary-dark mb-6">
                With over 15 years of experience in the financial sector, our team of experts 
                has helped thousands of clients secure the right loans with favorable terms. 
                We pride ourselves on our deep understanding of the lending landscape and our 
                commitment to providing personalized solutions.
              </p>
              <a 
                href="/about" 
                className="
                  inline-block bg-white hover:bg-secondary text-primary font-medium 
                  px-6 py-3 rounded-lg transition-all duration-300
                "
              >
                Learn More About Us
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Diyora Consultancy Team" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-serif font-bold text-primary-dark">15+ Years</p>
                <p className="text-primary-dark">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Hear from the people who have successfully secured loans with our guidance."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialPreview 
              name="Sarah Johnson" 
              testimonial="Diyora Consultancy made the entire home loan process so much easier. Their expertise saved us time and money!"
              rating={5}
            />
            <TestimonialPreview 
              name="Michael Chen" 
              testimonial="Thanks to their guidance, I secured an education loan for my MBA with excellent terms. Highly recommended!"
              rating={5}
            />
            <TestimonialPreview 
              name="Priya Sharma" 
              testimonial="Their business loan consultation was invaluable for my startup. They found options I wouldn't have discovered on my own."
              rating={4}
            />
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/reviews" 
              className="
                inline-block bg-primary hover:bg-primary-dark text-white font-medium 
                px-6 py-3 rounded-lg transition-all duration-300
              "
            >
              View All Testimonials
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction />
    </>
  );
};

// Testimonial Preview Component (used only in Home page)
const TestimonialPreview = ({ name, testimonial, rating }: { name: string; testimonial: string; rating: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`
        bg-white rounded-lg shadow-card p-6
        transform transition-all duration-500 ease-out
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-accent fill-accent" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic">"{testimonial}"</p>
      <p className="font-medium text-primary">{name}</p>
    </div>
  );
};

// Import Star from lucide-react for the TestimonialPreview component
import { Star } from 'lucide-react';

export default Home;