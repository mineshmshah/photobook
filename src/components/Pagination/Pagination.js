import React from 'react';
import { useDispatch } from 'react-redux';
import { goToPage } from '../../store/actions/actions';
import { Button, PaginationContainer } from './Pagination.styles';


export const Pagination = ({totalCount, countPerPage, currentPage, totalPages }) => {
      const dispatch = useDispatch();

      const goToNextPage = () => dispatch((currentPage + 1 <= totalPages ? goToPage(currentPage + 1) : null))
      const goToPreviousPage =()=>dispatch((currentPage - 1 >= 1 ? goToPage(currentPage - 1) : null))
      const gotToPage = page => dispatch(gotToPage(page))

      return(
        <PaginationContainer>
            <Button onClick={goToPreviousPage} disabled={!!(currentPage <= 1)} >Previous</Button>
            <Button onClick={goToNextPage} disabled={!!(currentPage >= totalPages )}>Next</Button>
        </PaginationContainer>
      )
}