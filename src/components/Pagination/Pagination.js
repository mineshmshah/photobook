import React from 'react';
import { Button, PaginationContainer } from './Pagination.styles';


// eslint-disable-next-line react/prop-types
export const Pagination = ({currentPage, totalCount, setCurrentPage }) => {
      const goToNextPage = () => currentPage + 1 <= totalCount ? setCurrentPage(currentPage + 1) : null
      const goToPreviousPage =()=> currentPage - 1 >= 1 ? setCurrentPage(currentPage - 1) : null
      // const gotToPage = page => (gotToPage(page)
      // const goToNextPage = () => dispatch((currentPage + 1 <= totalPages ? goToPage(currentPage + 1) : null))
      // const goToPreviousPage =()=>dispatch((currentPage - 1 >= 1 ? goToPage(currentPage - 1) : null))
      // const gotToPage = page => dispatch(gotToPage(page))

      return(
        <PaginationContainer>
            <Button onClick={goToPreviousPage} disabled={!!(currentPage + 1 <= 1)} >Previous</Button>
            <Button onClick={goToNextPage} disabled={!!(currentPage +1 >= totalCount )}>Next</Button>
        </PaginationContainer>
      )
}