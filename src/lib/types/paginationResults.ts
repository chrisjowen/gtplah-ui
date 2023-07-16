
export default interface PaginationResults<T> {
    entries: T[];
    total_pages: number;
    total_entries: number;
    page_number: number;
    page_size: number;
  }
