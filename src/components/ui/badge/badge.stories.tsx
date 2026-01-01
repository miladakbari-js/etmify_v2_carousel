import './badge.css';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
};
export default meta;

//story Type
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'متن ساده',
    color: 'error',
    variant: 'fill',
  },
};

export const ErrorBadge: Story = {
  args: {
    children: 'خطایی رخ داده است',
    color: 'error',
    variant: 'outline',
    rounded: true,
  },
};
