export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  className?: string;
  onChange: (page: number) => void;
};