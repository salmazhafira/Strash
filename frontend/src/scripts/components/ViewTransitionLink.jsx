import React from "react";
import { useNavigate } from "react-router-dom";

export default function ViewTransitionLink({ to, children, ...props }) {
  const navigate = useNavigate();
  return (
    <a
      href={to}
      {...props}
      onClick={e => {
        e.preventDefault();
        if (document.startViewTransition) {
          document.startViewTransition(() => {
            navigate(to);
          });
        } else {
          navigate(to);
        }
      }}
    >
      {children}
    </a>
  );
} 