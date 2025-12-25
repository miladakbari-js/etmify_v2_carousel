import React, { useState } from 'react';

import { Carousel } from './carousel';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import PlayIcon from '@/components/shared/icons/PlayIcon';
import { FigmaIcon, Ps5Icon, XboxIcon } from '@/components/shared/icons';
import { Select } from '@/components/ui/select';
import { Pagination } from '@/components/ui/pagination';

export default {
  title: 'Features/Home/Carousel',
  component: Carousel,
};

export const Desktop = () => (
  <Carousel
    className="flex h-[400px] w-[1200px] flex-col gap-[56px]"
    classHead="w-full h-[40px] flex justify-between flex-row-reverse"
    classActions="w-full h-[48px] flex  flex-row-reverse gap-[20px] "
    classTitle=" text-[25px] font-[700] text-neutral-700 items-center"
    classCards="w-full h-[225px] flex flex-wrap gap-[30px]"
    title="گیفت کارت و اعتبار دیجیتال"
    linkLabel={
      <span className="flex gap-1 text-[18px] text-neutral-500">
        <span>←</span> مشاهده همه
      </span>
    }
    link="/"
    actions={
      <>
        <Button className="hover:text-neutral-0 h-[48px] w-[133px] cursor-pointer rounded-[16px] border-1 bg-white px-[24px] py-[10px] font-bold text-neutral-700 hover:bg-neutral-800">
          استور و خرید
        </Button>
        <Button className="hover:text-neutral-0 h-[48px] w-[100px] cursor-pointer rounded-[16px] border-1 bg-white px-[24px] py-[10px] font-bold text-neutral-700 hover:bg-neutral-800">
          گیمینگ
        </Button>
        <Button className="hover:text-neutral-0 h-[48px] w-[136px] cursor-pointer rounded-[16px] border-1 bg-white px-[24px] py-[10px] font-bold text-neutral-700 hover:bg-neutral-800">
          موزیک و مدیا
        </Button>
      </>
    }
    cards={
      <>
        <Card
          className="flex h-[96px] w-[220px] items-center justify-end gap-3 rounded-[24px] border border-neutral-200 bg-white px-4"
          contentClassName="flex flex-col gap-2 items-end mr-4 text-[16px] font-bold font-700"
          iconClassName="flex h-[56px] w-[56px]
      items-center justify-center
      rounded-full bg-black"
          title=" ایکس باکس"
          linkLabel={
            <span className="flex items-center gap-1 text-amber-500">
              <span>←</span> خرید
            </span>
          }
          link="/"
          icon={<XboxIcon className="h-[72px] w-[72px]" />}
        />
        <Card
          className="flex h-[96px] w-[220px] items-center justify-end gap-3 rounded-[24px] border border-neutral-200 bg-white px-4"
          contentClassName="flex flex-col gap-2 items-end mr-4 text-[16px] font-bold font-700"
          iconClassName="flex h-[56px] w-[56px]
      items-center justify-center
      rounded-full bg-black"
          title="فیگما"
          linkLabel={
            <span className="flex items-center gap-1 text-amber-500">
              <span>←</span> خرید
            </span>
          }
          link="/"
          icon={<FigmaIcon className="h-[72px] w-[72px]" />}
        />
        <Card
          className="flex h-[96px] w-[220px] items-center justify-end gap-3 rounded-[24px] border border-neutral-200 bg-white px-4"
          contentClassName="flex flex-col gap-2 items-end mr-4 text-[16px] font-bold font-700"
          iconClassName="flex h-[56px] w-[56px]
      items-center justify-center
      rounded-full bg-black"
          title="پلی استیشن"
          linkLabel={
            <span className="flex items-center gap-1 text-amber-500">
              <span>←</span> خرید
            </span>
          }
          link="/"
          icon={<Ps5Icon className="h-[72px] w-[72px]" />}
        />
        <Card
          className="flex h-[96px] w-[220px] items-center justify-end gap-3 rounded-[24px] border border-neutral-200 bg-white px-4"
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
          icon={<PlayIcon className="h-[60px] w-[60px]" />}
        />
        <Card
          className="flex h-[96px] w-[220px] items-center justify-end gap-3 rounded-[24px] border border-neutral-200 bg-white px-4"
          contentClassName="flex flex-col gap-2 items-end mr-4 text-[16px] font-bold font-700"
          iconClassName="flex h-[56px] w-[56px]
      items-center justify-center
      rounded-full bg-black"
          title="پلی استیشن"
          linkLabel={
            <span className="flex items-center gap-1 text-amber-500">
              <span>←</span> خرید
            </span>
          }
          link="/"
          icon={<Ps5Icon className="h-[72px] w-[72px]" />}
        />
        <Card
          className="flex h-[96px] w-[220px] items-center justify-end gap-3 rounded-[24px] border border-neutral-200 bg-white px-4"
          contentClassName="flex flex-col gap-2 items-end mr-4 text-[16px] font-bold font-700"
          iconClassName="flex h-[56px] w-[56px]
      items-center justify-center
      rounded-full bg-black"
          title=" ایکس باکس"
          linkLabel={
            <span className="flex items-center gap-1 text-amber-500">
              <span>←</span> خرید
            </span>
          }
          link="/"
          icon={<XboxIcon className="h-[72px] w-[72px]" />}
        />
        <Card
          className="flex h-[96px] w-[220px] items-center justify-end gap-3 rounded-[24px] border border-neutral-200 bg-white px-4"
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
          icon={<PlayIcon className="h-[60px] w-[60px]" />}
        />
        <Card
          className="flex h-[96px] w-[220px] items-center justify-end gap-3 rounded-[24px] border border-neutral-200 bg-white px-4"
          contentClassName="flex flex-col gap-2 items-end mr-4 text-[16px] font-bold font-700"
          iconClassName="flex h-[56px] w-[56px]
      items-center justify-center
      rounded-full bg-black"
          title="فیگما"
          linkLabel={
            <span className="flex items-center gap-1 text-amber-500">
              <span>←</span> خرید
            </span>
          }
          link="/"
          icon={<FigmaIcon className="h-[72px] w-[72px]" />}
        />
      </>
    }
  />
);


export const Mobile = () => {
  const totalCards = 4;
  const cardsPerPage = 1;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };
return(
  <Carousel
    className="flex h-[573px] w-[364px] flex-col gap-[32px]"
    classHead="w-full h-[29px] flex justify-between flex-row-reverse items-center"
    classActions="w-full h-[48px] flex  flex-row-reverse gap-[20px] "
    classTitle=" text-[20px] font-[600] text-neutral-700 items-center"
    classCards="w-full h-[376px] flex flex-wrap gap-[20px] justify-center"
    title="گیفت کارت و اعتبار دیجیتال"
    linkLabel={
      <span className="flex gap-2 text-[14px] font-[400] text-neutral-500">
        <span>←</span> مشاهده همه
      </span>
    }
    link="/"
    actions={
      <>
        <Select
          classSelect="h-[40px] w-[118px] rounded-[10px] bg-neutral-100 flex items-center justify-center"
          style={{ direction: 'rtl' }}
          className="text-[16px]"
          options={['پلی استیشن', 'گیمینگ', 'موزیک و مدیا']}
        />
      </>
    }
    cards={
      <>
        <Card
          className="flex h-[180px] w-[170px] flex-col-reverse items-center justify-center gap-3 rounded-[24px] border border-neutral-200 bg-white p-4"
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
        <Card
          className="flex h-[180px] w-[170px] flex-col-reverse items-center justify-center gap-3 rounded-[24px] border border-neutral-200 bg-white p-4"
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
        <Card
          className="flex h-[180px] w-[170px] flex-col-reverse items-center justify-center gap-3 rounded-[24px] border border-neutral-200 bg-white p-4"
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
        <Card
          className="flex h-[180px] w-[170px] flex-col-reverse items-center justify-center gap-3 rounded-[24px] border border-neutral-200 bg-white p-4"
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
        <div className="flex w-full flex-row-reverse items-center justify-between">
          <div>
            <Button
              onClick={handlePrev}
              className="h-[40px] w-[40px] rounded-[10px] bg-neutral-100"
            >
              ←
            </Button>
            <Button
              onClick={handleNext}
              className="ml-5 h-[40px] w-[40px] rounded-[10px] bg-neutral-100"
            >
              →
            </Button>
          </div>
          <div>
            <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onChange={setCurrentPage}
          />
          </div>
        </div>
      </>
    }
  />
)};
