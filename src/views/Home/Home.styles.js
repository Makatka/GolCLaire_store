import styled from "styled-components";
8


export const Article = styled.article``
export const SectionWrapper = styled.section`
  display: flex;
  margin-bottom: 20px;

  @media screen and (max-width: 992px){
    flex-direction: column;
  }
`

export const AlertWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
  width: 100%;
  
  div:first-of-type {
    flex-grow: 1;
  }

  @media screen and (max-width: 992px){
    flex-direction: column;
  }
  
`