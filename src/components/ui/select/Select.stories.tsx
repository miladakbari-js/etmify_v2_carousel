import React from 'react';
import { Select } from './select';

export default {
  title: 'UI/Select',
  component: Select,
};

export const SelectButton = () => (
  <Select
    classSelect="h-[40px] w-[118px] rounded-[10px] bg-neutral-100 flex items-center justify-center"
    style={{ direction: 'rtl' }}
    className="text-[16px]"
    options={['پلی استیشن', 'گیمینگ', 'موزیک و مدیا']}
  />
);
