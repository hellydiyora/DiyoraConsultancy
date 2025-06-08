import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  image: string;
  loanType: string;
  delay?: number;
}

const TestimonialCard = ({ 
  name, 
  role, 
  testimonial, 
  rating, 
  image, 
  loanType,
  delay = 0 
}: TestimonialCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`
        bg-white rounded-lg shadow-card p-8 relative
        transform transition-all ease-out
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-serif font-semibold text-lg text-primary-dark">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "text-accent fill-accent" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-gray-600 mb-4 italic">"{testimonial}"</p>
      
      <div className="text-sm text-primary font-medium">
        <span className="bg-primary/10 py-1 px-3 rounded-full">
          {loanType} Loan
        </span>
      </div>
      
      <div className="absolute top-4 right-4 text-primary-light/20">
        <svg width="60" height="48" viewBox="0 0 60 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48V27.84C0 21.12 1.224 15.36 3.672 10.56C6.12 5.76 10.32 2.4 16.272 0.48L18.72 5.04C14.88 6.48 11.904 8.88 9.792 12.24C7.68 15.6 6.552 19.44 6.408 23.76C7.032 23.52 7.992 23.4 9.288 23.4C12.264 23.4 14.712 24.36 16.632 26.28C18.552 28.2 19.512 30.6 19.512 33.48C19.512 36.6 18.408 39.24 16.2 41.4C13.992 43.56 11.16 44.64 7.704 44.64C5.736 44.64 3.816 44.16 1.944 43.2C0.648 42.48 0 38.64 0 29.68V48ZM40.488 48V27.84C40.488 21.12 41.712 15.36 44.16 10.56C46.608 5.76 50.808 2.4 56.76 0.48L59.208 5.04C55.368 6.48 52.392 8.88 50.28 12.24C48.168 15.6 47.04 19.44 46.896 23.76C47.52 23.52 48.48 23.4 49.776 23.4C52.752 23.4 55.2 24.36 57.12 26.28C59.04 28.2 60 30.6 60 33.48C60 36.6 58.896 39.24 56.688 41.4C54.48 43.56 51.648 44.64 48.192 44.64C46.224 44.64 44.304 44.16 42.432 43.2C41.136 42.48 40.488 38.64 40.488 29.68V48Z" />
        </svg>
      </div>
    </div>
  );
};

export default TestimonialCard;