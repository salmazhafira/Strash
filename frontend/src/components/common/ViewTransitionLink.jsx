import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ViewTransitionLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    if (!document.startViewTransition) {
      window.scrollTo(0, 0);
      return;
    }

    e.preventDefault();

    try {
      await document.startViewTransition(async () => {
        // Scroll to top before transition
        window.scrollTo(0, 0);
        
        // Use React Router navigation
        navigate(to);
      }).finished;
    } catch (error) {
      // Fallback if transition fails
      window.scrollTo(0, 0);
      navigate(to);
    }
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick} 
      {...props}
    >
      {children}
    </Link>
  );
};

export default ViewTransitionLink; 