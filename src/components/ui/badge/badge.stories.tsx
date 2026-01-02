import './badge.css';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    startIcon: {
      options: ['None', 'Check', 'Warning'],
      mapping: {
        None: null,
        Check: <span>✅</span>,
        Warning: <span>⚠️</span>,
      },
      control: { type: 'select' },
    },
  },
};
export default meta;


type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'متن ساده',
    color: 'primary',
    variant: 'fill',
  },
};

export const ErrorBadge: Story = {
  args: {
    children: 'خطایی رخ داده است',
    color: 'error',
    variant: 'fill',
    rounded: true,
  },
};

export const SuccessBadge: Story = {
  args: {
    children: ' موفق  ',
    color: 'success',
    variant: 'outline',
    rounded: false,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'تایید نهایی',
    color: 'success',
    variant: 'fill',
    rounded: true,
    startIcon: <span>✅</span>,
  },
};

export const ErrorWithIcon: Story = {
  args: {
    children: 'خطای سیستمی',
    color: 'error',
    variant: 'outline',
    rounded: true,
    endIcon: <span>⚠</span>,
  },
};
