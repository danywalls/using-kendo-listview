import { Injectable } from '@angular/core';

export interface PaginationResult {
  items: Array<any>;
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  paginateData(data: any, page: number, pageSize: number): PaginationResult {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);

    return {
      items: data.slice(startIndex, endIndex),
      totalItems,
      currentPage: page,
      totalPages,
    };
  }
}
