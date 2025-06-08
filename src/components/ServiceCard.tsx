import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref} 
      className={`
        bg-white rounded-lg shadow-card p-6 relative overflow-hidden
        hover:shadow-lg transition-all duration-300 group
        transform transition-all ease-out
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-primary mb-4 text-4xl">{icon}</div>
      <h3 className="font-serif text-xl font-semibold mb-3 text-primary-dark">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <a 
        href="/services" 
        className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors"
      >
        Learn more 
        <ChevronRight 
          size={16} 
          className="ml-1 transform group-hover:translate-x-1 transition-transform"
        />
      </a>
      
      <div 
        className="absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-primary-light/5 
        group-hover:bg-primary-light/10 transition-all duration-300"
      />
    </div>
  );
};

export default ServiceCard;