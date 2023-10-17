import styled from "styled-components";

export const Wrapper = styled.section `

  &>div:first-of-type {
      
    &>a {
      height: 300px;
      width: 100%;
      justify-content: left;
      border-radius: 3px;
      
      &>div {
        position: static;
        display: flex;
        flex-direction: column;
        bottom:0;
        padding: 20px 20px;

        span, h2, p {
          color: white;
          text-align: left;
          
        }

        h2 {
          letter-spacing: 2px;
          font-weight: 300;
          font-size: 26px;
          margin-top: 10px;
        }
        
        p:last-of-type {
          position: absolute;
          bottom: 20px;
        }        
      }
      
      span {
        font-size: 10px;
        font-weight: 500;
      }
    
    }
    
    
  }
`
export const ContainerSlides = styled.div`
  width: 100%;
  height: 500px;
  margin: 20px auto;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
`
export const ArticleWrapper = styled.div `


`

export const CarouselWrapper = styled.div`
  width: 600px;
  height: 400px;
  margin: 10px auto;
  overflow: hidden;
`