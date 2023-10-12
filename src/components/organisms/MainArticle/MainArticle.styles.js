import styled from "styled-components";

export const Wrapper = styled.section `

  &>article:first-of-type {
    
    
    
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
export const ArticleWrapper = styled.article `


`