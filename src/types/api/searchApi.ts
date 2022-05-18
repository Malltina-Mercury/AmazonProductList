import {Product} from '../entity/product';
import {Page} from '../entity/page';

export interface SearchApiParams {
  q: string;
  l?: string;
}
export interface SearchApiResponse {
  products: Product[];
  pages: Page[];
  keyword: string;
}
