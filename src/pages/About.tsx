import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import AnimatedCounter from '../components/AnimatedCounter';
import CallToAction from '../components/CallToAction';
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  TrendingUp, 
  CheckCircle 
} from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">About Diyora Consultancy</h1>
            <p className="text-gray-600 text-lg mb-8">Your trusted partner for navigating the complex world of loan financing.</p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Diyora Consultancy Office" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <SectionHeading 
                title="Our Mission & Vision" 
                alignment="left"
              />
              <div 
                ref={ref}
                className={`
                  space-y-6 text-gray-600
                  transform transition-all duration-700 ease-out
                  ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
              >
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">Our Mission</h3>
                  <p>
                    To simplify the loan acquisition process for our clients by providing expert 
                    consultation, personalized guidance, and innovative financial solutions that 
                    meet their unique needs and circumstances.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">Our Vision</h3>
                  <p>
                    To become the most trusted loan consultancy firm, known for our integrity, 
                    expertise, and commitment to client success. We aim to transform the loan 
                    acquisition experience by making it transparent, efficient, and accessible for all.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">Our Values</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-accent mr-2" />
                      <span>Integrity</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-accent mr-2" />
                      <span>Expertise</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-accent mr-2" />
                      <span>Client-First Approach</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-accent mr-2" />
                      <span>Transparency</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-accent mr-2" />
                      <span>Innovation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-accent mr-2" />
                      <span>Excellence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Us" 
            subtitle="We offer a range of benefits that make us the preferred choice for loan consultation services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((item, index) => (
              <WhyChooseUsCard 
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Impact in Numbers" 
            subtitle="We're proud of the difference we've made in the lives of our clients over the years."
            isDark={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={15} suffix="+" title="Years Experience" />
            <AnimatedCounter end={8500} suffix="+" title="Happy Clients" />
            <AnimatedCounter end={42} title="Partnered Banks" />
            <AnimatedCounter end={12500} suffix="+" title="Loans Processed" />
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Leadership Team" 
            subtitle="Meet the experienced professionals who lead our consultancy and ensure the highest standards of service."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember 
              name="Rajiv Mehta"
              position="Founder & CEO"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={0}
            />
            <TeamMember 
              name="Aisha Patel"
              position="Chief Financial Advisor"
              image="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={150}
            />
            <TeamMember 
              name="Michael Roberts"
              position="Head of Client Relations"
              image="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Banking Partners" 
            subtitle="We work with leading financial institutions to provide you with the best loan options."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-card flex items-center justify-center h-24"
              >
                <div className="text-center text-primary font-serif font-bold">
                  Bank {index}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

// Why Choose Us Card Component
const WhyChooseUsCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
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
        bg-white rounded-lg shadow-card p-6
        transform transition-all duration-500 ease-out
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-accent-light mb-4 p-3 bg-accent-light/10 inline-block rounded-full">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Team Member Component
const TeamMember = ({ 
  name, 
  position, 
  image, 
  delay 
}: { 
  name: string; 
  position: string; 
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
        group
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-80 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-serif text-xl font-semibold text-primary">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
};

// Data for Why Choose Us section
const whyChooseUsData = [
  {
    icon: <Shield size={24} />,
    title: "Expert Advisory",
    description: "Our team comprises industry experts with years of experience in loan consultation and financial services."
  },
  {
    icon: <Award size={24} />,
    title: "High Success Rate",
    description: "We pride ourselves on our 95% loan approval success rate, ensuring our clients get the financial support they need."
  },
  {
    icon: <Users size={24} />,
    title: "Personalized Solutions",
    description: "We understand that each client has unique needs, and we tailor our advice to suit individual circumstances."
  },
  {
    icon: <Clock size={24} />,
    title: "Time Efficiency",
    description: "Our streamlined processes ensure quick turnaround times, saving you weeks of paperwork and follow-ups."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Best Rates Guaranteed",
    description: "Our strong relationships with lending institutions help us secure the most competitive interest rates for our clients."
  },
  {
    icon: <CheckCircle size={24} />,
    title: "End-to-End Support",
    description: "From initial consultation to loan disbursement, we provide comprehensive support throughout the entire process."
  }
];

export default About;