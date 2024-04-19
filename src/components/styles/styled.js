import styled from "styled-components";


export const HomeContainer =styled.div`
display: flex;
flex-direction: column;
padding: 40px 70px;
`

export const StateContainer =styled.div`
display: flex;
justify-content: start;
align-items: center;
gap: 3px;
p{
    color: blue;
}
`

export const PopupVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 25px 30px 25px;
`;

export const PopupInsideTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px 0px 25px;
  h3 {
    color: #000;
    font-family: "Open Sans";
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: "Open Sans";
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const VideoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  img {
    width: 100%;
    cursor: pointer;
  }
`;