import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const CallToAction = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 bg-accent/5 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 bg-accent/5 w-64 h-64 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div 
        ref={ref}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className={`
              font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6
              transform transition-all duration-700 ease-out
              ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
          >
            Ready to Find the Perfect Loan Solution?
          </h2>
          <p 
            className={`
              text-secondary-dark text-lg mb-8 max-w-2xl mx-auto
              transform transition-all duration-700 delay-150 ease-out
              ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
          >
            Our expert consultants are ready to assist you in finding the best loan 
            options tailored to your unique financial needs. Take the first step towards 
            your financial goals today.
          </p>
          <a 
            href="/contact" 
            className={`
              inline-flex items-center bg-accent hover:bg-accent-light text-primary-dark 
              font-medium px-6 py-3 rounded-lg transition-all duration-300
              hover:shadow-lg transform transition-all duration-700 delay-300 ease-out
              ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
          >
            Contact Us Today
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;