import styled from 'styled-components';




export const ActionButtons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    transform: translateX(50px);
  }


  span {
    background-color: transparent;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
      position: relative;
      
      &:hover {
          span:after {
              content: 'sfsfsdf';
              padding: 5px 8px;
              color: white;
              background-color: rgba(6, 6, 6, .8);
          }
      }

    svg {
      max-width: 16px;
      max-height: 16px;
    }
  }
`
export const ProductImage = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;
    
    &:after {
        content: 'Add to cart!';
        position: absolute;
        color: white;
        background-color: ${({theme}) => theme.colors.accent};
        bottom:0;
        left: 0;
        padding: 10px 0;
        text-align: center;
        display: block;
        width: 100%;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 10px;
        font-weight: 600;
        line-height: 1.4;
        transform: translateY(100%);
        transition: all .3s ease-in-out;
    }
`
export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  h6 {
      margin: 10px 0;
      font-family: 'Manrope', sans-serif;
      font-size: 14px;
      
  }

  img {
    width: 100%;
    object-fit: cover;
  }


  &:hover {
    ${ActionButtons} {

      span {
        background-color: white;
      }

      & > div {
        transform: translateX(0px);
      }

    }

    ${ProductImage} {
      img {
        transform: scale(1.1);
      }

      &:after {
        transform: translateY(0);
      }
    }


  }
`
export const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  color: ${({theme}) => theme.colors.text};
    font-size: 14px;
    font-family: 'Jost', sans-serif;
    margin-block-start: 0;
`
