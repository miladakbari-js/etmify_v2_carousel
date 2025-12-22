import React from 'react';
import { Button } from './button';

export default {
  title: 'UI/Button',
  component: Button,
};

export const UnSelected = () => (
  <Button className="rounded border-1 bg-white px-4 py-2 text-neutral-700">استور و خرید</Button>
);

export const Selected = () => (
  <Button className="rounded bg-neutral-800 px-4 py-2 text-white">استور و خرید</Button>
);
