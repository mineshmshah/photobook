import styled from 'styled-components';

export const MainContainer = styled.div`
background-color: ${props => props.backgroundColor || "#ecece6"} ;
/* background-color:red; */
height: 100%;
`

export const BackgroundImageContainer = styled.div`
display: grid;
color: ${props => props.textColor || "white"} ;
font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
height: 100%;
justify-content: center;
/* padding-top: 120px; */
h1 {
    font-size: 100px;
    text-align: center;
    font-family: Hello Beautiful,Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
}
p {
    text-align: center;
}

a {
    text-decoration: none;
    font-weight: 500;
    color: gray
}
width: 100%;
/* box-sizing: border-box; */
align-items: center;
background-image: url(${props => props.backgroundImage || ""});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
padding: 60px;
box-sizing: border-box;
`

