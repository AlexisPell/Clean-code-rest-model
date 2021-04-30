import { makeAutoObservable } from 'mobx';
import { IRootStore } from './index';

export class PaginationStore {
  _page = 1; // current page with items
  _totalCount = 0; // total num of items
  _pageLimit = 4; // limit of items per page

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
  }

  // // actions // //
  setPage = (page: number) => {
    this._page = page;
  };
  setTotalCount = (totalCount: number) => {
    this._totalCount = totalCount;
  };

  // getters
  get page() {
    return this._page;
  }
  get totalCountItems() {
    return this._totalCount;
  }
  get pageLimit() {
    return this._pageLimit;
  }
}
