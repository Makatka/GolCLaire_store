import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  transition: all .3s ease-in-out ;
  padding: 0 10px;
  
  @media screen and (max-width: 1400px){
    width: 100%;
    max-width: 1320px;
  }

  @media screen and (max-width: 1200px){
    width: 100%;
    max-width: 1140px;
  }

  @media screen and (max-width: 992px){
    width: 100%;
    max-width: 960px;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    max-width: 720px;
  }

  @media screen and (max-width: 576px){
    width: 100%;
    max-width: 540px;
  }
`