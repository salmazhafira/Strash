import React from "react";
import { useNavigate } from "react-router-dom";

export default function ViewTransitionLink({ to, children, ...props }) {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      if (document.startViewTransition) {
        await document.startViewTransition(() => {
          navigate(to);
        }).finished;
      } else {
        navigate(to);
      }
    } catch (error) {
      console.error('Navigation failed:', error);
      navigate(to);
    }
  };

  return (
    <a
      href={to}
      {...props}
      onClick={handleClick}
      role="link"
      tabIndex={0}
    >
      {children}
    </a>
  );
} 