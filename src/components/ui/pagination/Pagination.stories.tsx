import React from 'react';
import { Pagination } from './pagination';

export default {
  title: 'UI/Pagination',
  component: Pagination,
};

export const Default = () => (
  <Pagination totalPages={4} currentPage={0} />
);

export const SecondPage = () => (
  <Pagination totalPages={4} currentPage={1} />
);

export const ThirdPage = ()=>(
    <Pagination totalPages={4} currentPage={2} />
)

export const LastPage = () => (
  <Pagination totalPages={4} currentPage={3} />
);