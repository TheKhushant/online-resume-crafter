
import React from 'react';
import { Link } from 'react-router-dom';
import Stars from '../components/Stars';
import NavBar from '../components/NavBar';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  // Create empty refs for NavBar props
  const emptyRef = { current: null };
  
  return (
    <div className="min-h-screen bg-cosmic-dark flex flex-col">
      <Stars />
      <NavBar 
        onNavigate={() => {}} 
        journeyRef={emptyRef} 
        certificatesRef={emptyRef} 
        activitiesRef={emptyRef} 
        workRef={emptyRef} 
        contactRef={emptyRef} 
      />
      
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cosmic-glow to-cosmic-accent animate-neon-pulse">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6">
            Page Not Found
          </h2>
          <p className="text-white/70 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cosmic-accent to-cosmic-glow text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cosmic-accent/20"
          >
            <Home size={18} />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
