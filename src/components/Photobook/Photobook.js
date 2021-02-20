import React, { useState } from 'react';
import { Gallery } from '../Gallery'
import { Message } from '../Message'
import { jsonData } from '../../db/DATA'
import { Container, MainContainer, Page } from './Photobook.styles'
import { Pagination } from '../Pagination'

 
export const Photobook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageData = jsonData[currentPage]
  console.log(pageData)
  return (
    <Container>
    <Pagination  totalCount={jsonData.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/>  
    <MainContainer>
      <Page>
        {
          pageData[0].type === 'Message' && <Message 
          header={pageData[0].header}
          message={pageData[0].message}  
          backgroundColor={pageData[0].backgroundColor}
          backgroundImage={pageData[0].media[0]}
          link={pageData[0].link}
          mediaLink={pageData[0].media && pageData[0].media[0]} 
          video={pageData[0].video && pageData[0].video[0]}
          />
        }
        {
           pageData[0].type === 'gallery' && <Gallery 
                     header={pageData[0].header}

           photos={pageData[0].media}
           />
        }
      </Page>
      <Page>
                {
          pageData[1].type === 'Message' && <Message 
          header={pageData[1].header} 
          backgroundColor={pageData[1].backgroundColor}
          backgroundImage={pageData[1].media[0]}
          video={pageData[1].video && pageData[1].video[0]}
          />
        }
         {
           pageData[1].type === 'gallery' && <Gallery 
           header={pageData[1].header}
           photos={pageData[1].media}
           />
        }
      </Page>
    </MainContainer>
    </Container>

  );
}

