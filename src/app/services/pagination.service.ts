import { Injectable } from '@angular/core';
import { PaginationResult } from '../models/entities';

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
