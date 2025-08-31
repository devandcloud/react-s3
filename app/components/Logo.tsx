import React from 'react';

type SizeOption = 'sm' | 'md' | 'lg' | 'xl';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  withText?: boolean;
  size?: SizeOption;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  withText = true, 
  size = 'md', 
  ...props 
}) => {
  // Tailles prédéfinies pour une meilleure cohérence
  const sizeClasses: Record<SizeOption, string> = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const textSizes: Record<SizeOption, { main: string; sub: string }> = {
    sm: { main: 'text-lg', sub: 'text-xs' },
    md: { main: 'text-2xl', sub: 'text-sm' },
    lg: { main: 'text-3xl', sub: 'text-base' },
    xl: { main: 'text-4xl', sub: 'text-lg' },
  };

  return (
    <div 
      className={`flex items-center ${withText ? 'space-x-3' : ''} ${className}`} 
      {...props}
    >
      <img 
        src="/logo500.png" 
        alt="Logo React on AWS S3"
        className={`${sizeClasses[size] || sizeClasses.md} object-contain`}
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: '100%',
        }}
      />
      
      {withText && (
        <div className="flex flex-col">
          <span className={`${textSizes[size]?.main || 'text-2xl'} font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900`}>
            React
          </span>
          <span className={`${textSizes[size]?.sub || 'text-sm'} font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800 -mt-1`}>
            on AWS S3
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
