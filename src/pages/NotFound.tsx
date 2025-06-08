import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="font-serif text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-serif text-2xl font-semibold text-primary-dark mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/"
            className="
              w-full sm:w-auto flex items-center justify-center bg-primary text-white 
              px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors
            "
          >
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="
              w-full sm:w-auto flex items-center justify-center bg-white text-primary border border-primary
              px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors
            "
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;