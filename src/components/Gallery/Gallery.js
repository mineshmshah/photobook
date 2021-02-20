import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import { Image, GalleryContainer, Header } from './Gallery.styles'

const options = {
  buttons: {
    backgroundColor: "rgba(140, 94, 88, 0.8)",
    iconColor: "rgba(241, 191, 152, 0.7)"
  },
  settings: {
    overlayColor: "rgba(255, 237, 225, 1)",
    transitionSpeed: 1000,
    transitionTimingFunction: "linear"
  },
  thumbnails: {
    thumbnailsSize: ["120px", "100px"],
    thumbnailsOpacity: 0.4
  },
  caption: {
    captionColor: "rgba(241, 191, 152, 1)"
  },
  progressBar: {
    size: "4px",
    backgroundColor: "rgba(255, 237, 225, 1)",
    fillColor: "#AF9AB2"
  }
};

// eslint-disable-next-line react/prop-types
export const Gallery = ({photos, header}) => (
   <SRLWrapper options={options}>
     <Header>{header}</Header>
         <GalleryContainer>
        {
          // eslint-disable-next-line react/prop-types
          photos.map( (photo) => <Image key={photo} width="300px" 
        src={photo}
        />
          )
        }   
            </GalleryContainer>

        </SRLWrapper>

)

