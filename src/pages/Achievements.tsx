import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import AnimatedCounter from '../components/AnimatedCounter';
import CallToAction from '../components/CallToAction';
import { 
  Award, 
  Trophy, 
  Star, 
  FileText, 
  Users, 
  Building
} from 'lucide-react';

const Achievements = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Our Achievements</h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover our success stories and milestones that showcase our commitment 
              to excellence in loan consultation services.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Key Milestones" 
            subtitle="We take pride in our journey and the impact we've made in the financial consulting industry."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              icon={<Users size={28} />}
              value="8,500+"
              label="Happy Clients"
              delay={0}
            />
            <StatCard 
              icon={<FileText size={28} />}
              value="12,500+"
              label="Loans Processed"
              delay={150}
            />
            <StatCard 
              icon={<Building size={28} />}
              value="42"
              label="Banking Partners"
              delay={300}
            />
            <StatCard 
              icon={<Trophy size={28} />}
              value="15+"
              label="Years of Excellence"
              delay={450}
            />
          </div>
        </div>
      </section>
      
      {/* Success Rate Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Success Rate" 
            subtitle="We've maintained an exceptional track record of successful loan approvals across various categories."
            isDark={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <RateCard 
              category="Home Loans"
              rate={96}
              delay={0}
            />
            <RateCard 
              category="Education Loans"
              rate={94}
              delay={150}
            />
            <RateCard 
              category="Business Loans"
              rate={92}
              delay={300}
            />
            <RateCard 
              category="Mortgage Loans"
              rate={97}
              delay={450}
            />
          </div>
        </div>
      </section>
      
      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Awards & Recognition" 
            subtitle="Our commitment to excellence has been recognized by various industry organizations."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <AwardCard 
                key={index}
                title={award.title}
                organization={award.organization}
                year={award.year}
                description={award.description}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Growth */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Client Growth" 
            subtitle="Our client base has grown steadily over the years, reflecting the trust and confidence placed in our services."
          />
          
          <div className="max-w-4xl mx-auto">
            <GrowthGraph />
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Banking Partners" 
            subtitle="We've established strong relationships with leading financial institutions to provide our clients with the best loan options."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
              <PartnerLogo key={index} number={index} />
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

// Stat Card Component
const StatCard = ({ 
  icon, 
  value, 
  label,
  delay 
}: { 
  icon: React.ReactNode; 
  value: string; 
  label: string;
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
        bg-white rounded-lg shadow-card p-8 text-center
        transform transition-all duration-500 ease-out
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        border border-secondary-dark/10
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
        {icon}
      </div>
      <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

// Rate Card Component
const RateCard = ({ 
  category, 
  rate,
  delay 
}: { 
  category: string; 
  rate: number;
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
        bg-primary-dark rounded-lg shadow-md p-8 text-center
        transform transition-all duration-500 ease-out
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-secondary-dark font-medium mb-4">{category}</h3>
      <div className="relative mb-2">
        <div className="w-32 h-32 mx-auto relative">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              className="stroke-current text-primary-light opacity-30"
              fill="none"
              strokeWidth="3"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="stroke-current text-accent-light"
              fill="none"
              strokeWidth="3"
              strokeDasharray={`${rate}, 100`}
              strokeLinecap="round"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <div className="font-serif text-3xl font-bold">{rate}%</div>
          </div>
        </div>
      </div>
      <p className="text-secondary-dark">Success Rate</p>
    </div>
  );
};

// Award Card Component
const AwardCard = ({ 
  title, 
  organization, 
  year, 
  description,
  delay 
}: { 
  title: string; 
  organization: string; 
  year: string;
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
        bg-white rounded-lg shadow-card p-6 border border-secondary-dark/10
        transform transition-all duration-500 ease-out
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start mb-4">
        <div className="text-accent-light mr-4">
          <Award size={30} />
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold text-primary mb-1">{title}</h3>
          <p className="text-primary-light text-sm">{organization} • {year}</p>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Growth Graph Component
const GrowthGraph = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const years = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
  const values = [2100, 2800, 3600, 4500, 5400, 6300, 7400, 8500];
  const maxValue = Math.max(...values);

  return (
    <div 
      ref={ref} 
      className="bg-white rounded-lg shadow-card p-6 overflow-hidden"
    >
      <h3 className="font-serif text-xl font-semibold text-primary mb-6 text-center">Client Growth (2016-2023)</h3>
      <div className="relative h-64">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>
        {[25, 50, 75, 100].map((percent) => (
          <div key={percent} className="absolute left-0 right-0 h-[1px] bg-gray-200" style={{ bottom: `${percent}%` }}>
            <div className="absolute -top-3 -left-12 text-xs text-gray-500">{Math.round(maxValue * (percent / 100))}</div>
          </div>
        ))}
        
        <div className="flex h-full items-end">
          {values.map((value, index) => {
            const height = (value / maxValue) * 100;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className={`
                    w-4/5 bg-primary transition-all duration-1000 ease-out rounded-t-sm 
                    ${inView ? 'opacity-100' : 'opacity-0'} 
                    ${inView ? 'h-[' + height + '%]' : 'h-0'}
                  `}
                  style={{ 
                    height: inView ? `${height}%` : '0%',
                    transitionDelay: `${index * 100}ms`,
                  }}
                ></div>
                <div className="text-xs text-gray-500 mt-2">{years[index]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Partner Logo Component
const PartnerLogo = ({ number }: { number: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`
        bg-white p-6 rounded-lg shadow-card flex items-center justify-center
        transform transition-all duration-500 ease-out
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        border border-secondary-dark/10
      `}
      style={{ transitionDelay: `${(number % 6) * 100}ms` }}
    >
      <div className="font-serif font-bold text-primary">Bank {number}</div>
    </div>
  );
};

// Awards data
const awards = [
  {
    title: "Excellence in Financial Consulting",
    organization: "Financial Advisors Association",
    year: "2023",
    description: "Recognized for our outstanding contribution to financial consulting and loan advisory services."
  },
  {
    title: "Best Loan Consultancy",
    organization: "Business Standard Awards",
    year: "2022",
    description: "Awarded for providing exceptional loan consultancy services with high client satisfaction rates."
  },
  {
    title: "Most Innovative Financial Solution",
    organization: "Innovation in Finance Summit",
    year: "2021",
    description: "Honored for developing innovative approaches to complex loan financing challenges."
  },
  {
    title: "Customer Service Excellence",
    organization: "Customer Experience Awards",
    year: "2022",
    description: "Recognized for our commitment to providing superior customer service throughout the loan process."
  },
  {
    title: "Top Financial Consultancy",
    organization: "Metropolitan Business Review",
    year: "2020",
    description: "Named as one of the top financial consultancy firms for small and medium businesses."
  },
  {
    title: "Rising Star in Finance",
    organization: "Emerging Business Awards",
    year: "2019",
    description: "Acknowledged for our rapid growth and impact in the financial consultancy sector."
  }
];

export default Achievements;