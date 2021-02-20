import React  from 'react';
import { MainContainer, BackgroundImageContainer } from './Message.styles'
 
// eslint-disable-next-line react/prop-types
export const Message = ({backgroundColor, backgroundImage, message, header, link, video, mediaLink}) => (
    <MainContainer backgroundColor={backgroundColor}>
      <BackgroundImageContainer backgroundImage={backgroundImage}>
        <h1>{header}</h1>
       <span><p>{message}{link && <a rel="noreferrer" target="_blank" href={mediaLink}>here</a>}</p></span>
       {
         video && <video  width="400" height="500" controls key={video}>
          <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
       }
      </BackgroundImageContainer>
    </MainContainer>
  )

