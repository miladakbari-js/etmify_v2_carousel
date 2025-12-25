import React from 'react';
import { Card } from './card';
import PlayIcon from '@/components/shared/icons/PlayIcon';

export default {
  title: 'UI/Card',
  component: Card,
};

export const Mobile = () => (
  <Card
    className="flex h-[180px] w-[140px] flex-col-reverse items-center justify-center gap-3 rounded-[24px] border border-neutral-200 bg-white p-4"
    iconClassName="
      flex h-[72px] w-[72px]
      items-center justify-center
    "
    contentClassName="
      flex flex-col items-center gap-1
      text-center
      text-[16px] font-bold font-700
    "
    title="پلی استور"
    link="/"
    linkLabel={
      <span className="flex items-center gap-1 text-sm text-amber-500">
        <span>←</span> خرید
      </span>
    }
    icon={<PlayIcon className="h-[72px] w-[72px] text-white" />}
  />
);

export const Desktop = () => (
  <Card
    className="flex h-[96px] w-[290px] items-center justify-end gap-3 rounded-[24px] border border-neutral-200 bg-white px-4"
    contentClassName="flex flex-col gap-2 items-end mr-4 text-[16px] font-bold font-700"
    iconClassName="flex h-[56px] w-[56px]
      items-center justify-center
      rounded-full bg-black"
    title="پلی استور"
    linkLabel={
      <span className="flex items-center gap-1 text-amber-500">
        <span>←</span> خرید
      </span>
    }
    link="/"
    icon={<PlayIcon className="h-[72px] w-[72px]" />}
  />
);
