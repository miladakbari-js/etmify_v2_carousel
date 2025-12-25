import { PaginationProps } from './types';

export const Pagination = ({
  totalPages,
  currentPage,
  className,
}: PaginationProps) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {Array.from({ length: totalPages }).map((_, index) => {
        const isActive = index === currentPage;

        return (
          <div
           role="presentation"
            key={index}
            className={
              isActive
                ? 'w-6 h-2 rounded-full bg-orange-500 transition-all'
                : 'w-2 h-2 rounded-full bg-orange-300'
            }
          />
        );
      })}
    </div>
  );
};
