import { VariantProps } from 'class-variance-authority';
import { ColorVariant } from '../types';
import { badgeVariants } from './badge';

export type BadgeVariant = 'outline' | 'fill';
export type BadgeColor = Exclude<ColorVariant, 'muted', 'white', 'gray'>;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  color?: BadgeColor;
  variant?: BadgeVariant;
  rounded?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
