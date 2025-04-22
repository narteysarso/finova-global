import React from 'react';

type ButtonVariant = 'primary' | 'outline';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseClasses = variant === 'primary' 
    ? 'btn-primary' 
    : 'btn-outline';
  
  const classes = `${baseClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;