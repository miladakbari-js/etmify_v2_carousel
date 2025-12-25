import { PaginationProps } from './types';

export const Pagination = ({ totalPages, currentPage, className, onChange }: PaginationProps) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {Array.from({ length: totalPages }).map((_, index) => {
        const isActive = index === currentPage;

        return (
          <div
            role="presentation"
            key={index}
            onClick={() => onChange(index)}
            className={
              isActive
                ? 'h-2 w-6 rounded-full bg-orange-500 transition-all'
                : 'h-2 w-2 rounded-full bg-orange-300'
            }
          />
        );
      })}
    </div>
  );
};
