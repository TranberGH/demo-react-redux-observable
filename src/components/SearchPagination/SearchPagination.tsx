import React from 'react';

import {
  getPageCount,
} from '../../core';

interface SearchPaginationProps {
  currentPage: number;
  totalItemCount: number;
  rowsPerPage: number;
  displayPageCount: number;
  updateCurrentPage: (currentPage: number) => void;
}

class SearchPagination extends React.Component<SearchPaginationProps, any> {
  constructor(props: SearchPaginationProps) {
    super(props);

    this.updateCurrentPage = this.updateCurrentPage.bind(this);
  }

  updateCurrentPage(evt: React.SyntheticEvent) {
    const currentPage = (evt.target as HTMLElement).dataset.page || '';
    const page = Number.parseInt(currentPage);
    if (!isNaN(page)) {
      this.props.updateCurrentPage(page);
    }
  }

  render() {
    const { currentPage, totalItemCount, rowsPerPage, displayPageCount } = this.props;
    const totalPageCount = getPageCount(totalItemCount, rowsPerPage);
    const startPage = (totalPageCount > displayPageCount) ? Math.floor(currentPage / displayPageCount) * displayPageCount : 0;
    let displayItemCount = displayPageCount;
    if ( totalPageCount - startPage < displayPageCount ) {
      displayItemCount = totalPageCount - startPage;
    }
    const paginationClasses = ['pagination-list'];

    const paginationItems = [];
    for (let i = 0; i < displayItemCount; i++ ) {
      const itemClasses = ['pagination-item'];
      const currentItem = startPage + i;
      if ( currentItem === currentPage ) {
        itemClasses.push('current-page');
      }
      paginationItems.push(<li key={`pagination-${i}`} className={itemClasses.join(' ')}>
      <button data-page={currentItem}>{currentItem + 1}</button>
      </li>);
    }

    const numPage = currentPage + 1 < totalPageCount ? currentPage + 1 : totalPageCount;

    return (
      <div onClick={this.updateCurrentPage} className="pagination-block">
        <p className="page-count">Page {numPage} sur <em>{totalPageCount}</em></p>
        <div className="pagination-nav">
        <p className="prev-block">
        { currentPage > 0 && <button data-page={0} title="Afficher la première page">&lt;&lt;</button>}
        { currentPage > displayPageCount && <button data-page={currentPage - displayPageCount} title={`Afficher les ${displayPageCount} pages précédentes`}>&lt;</button> }
        </p>

        <ol className={paginationClasses.join(' ')}>
        { paginationItems }
        </ol>

        <p className="next-block">
        { currentPage < (totalPageCount - 1 - displayPageCount) && <button data-page={currentPage + displayPageCount} title={`Afficher les ${displayPageCount} pages suivantes`}>&gt;</button> }
        { currentPage < (totalPageCount - 1) && <button data-page={totalPageCount - 1} title="Afficher la dernière page">&gt;&gt;</button>}
        </p>
        </div>
      </div>
    );
  }
}

export default SearchPagination;
