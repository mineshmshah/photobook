import styled from 'styled-components';

export const Header = styled.h1`
    font-size: 100px;
    text-align: center;
    font-family: Hello Beautiful,Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
    padding: 30px
`

export const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
border: 6px white solid;
border-bottom: 12px white solid;
cursor: pointer;
background-color: gray;
border-radius: 4px;
box-sizing: border-box;
box-shadow: 0px 1px 5px 0px  rgba(0,0,0,.3);
  max-height: 110px

`
export const GalleryContainer = styled.div`
font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
/* width: 50vw; */
display: grid;
grid-gap: 1rem;
grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
grid-auto-rows: 1fr;
padding: 16px;
::before {
  content: '';
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}
> *:first-child {
  max-height: 220px;
  grid-row: 1 / 3;
  grid-column: 1 / 3;
  transform: rotate(
-3deg
);
}
`