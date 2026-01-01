import * as React from 'react';
import { cva } from 'class-variance-authority';
import { BadgeProps } from './types';
import { cn } from '@/utils/ui';

export const badgeVariants = cva('badge', {
  variants: {
    variant: {
      fill: 'badge-fill',
      outline: 'badge-outline',
      ghost: 'badge-ghost',
    },
    color: {
      success: 'badge-success',
      error: 'badge-error',
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      gray: 'badge-gray',
      white: 'badge-white',
    },
    rounded: { true: 'badge-fullRounded' },
    fullWidth: { true: 'badge-fullWidth' },
  },
  defaultVariants: {
    variant: 'fill',
    color: 'primary',
  },
});

export const Badge: React.FC<BadgeProps> = ({
  className = 'badge-text-md',
  variant,
  color,
  rounded = false,
  fullWidth = false,
  startIcon,
  endIcon,
  children,
  ...props
}) => {
  const badgeClasses = cn(badgeVariants({ variant, color, rounded, fullWidth }), className);

  const badgeContent = (
    <>
      {startIcon ? <span className={cn(children && 'mr-2')}>{startIcon}</span> : null}
      {children}
      {endIcon ? <span className={cn(children && 'ml-2')}>{endIcon}</span> : null}
    </>
  );
  return (
    <span className={badgeClasses} {...(props as BadgeProps)}>
      {badgeContent}
    </span>
  );
};
