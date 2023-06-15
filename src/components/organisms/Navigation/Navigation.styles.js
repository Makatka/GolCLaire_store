import styled from 'styled-components';
import {Container} from '../../templates/Container/Container'

export const NavWrapper = styled.div`
  min-height: 60px;
  border-bottom: 1px solid ${({theme}) => theme.colors.semi_light_grey};

  ${Container}{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme.colors.accent};

    & > div {
      display: flex;
      align-items: center;

      &:first-of-type {
        @media screen and (max-width: 1280px) {
          flex-grow: 1;
        }  
      }
           
      
      
      & > svg {
        color: ${({theme}) => theme.colors.text};
        font-size: 30px;
      }
    }

    ul {
      display: flex;
    }
  }
 
`
export const Logo = styled.a`
  font-size: 24px;
  margin-left: 15px;

  @media screen and (max-width: 1280px) {
    flex-grow: 1;
    text-align: center;
  }
  

`

export const Search = styled.div`
  margin-right: 5px;
  font-size: 22px;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`


export const NavItem = styled.li`
  margin-right: 15px;
  cursor: pointer;
  color: ${({isDisabled, theme: {colors}}) => (isDisabled ? colors.text : colors.accent)};

  &:hover {
    color: ${({theme}) => theme.colors.text};
  }
  svg {
    transform: translateY(6px);
    font-size: 20px;
    margin-left: 3px;
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
`
export const UserActions = styled.ul`
  font-size: 22px;

  li {
    margin: 0 8px;
    position: relative;
    padding-left: 10px;
    padding-top: 2px;


    span {
      font-size: 10px;
      line-height: 15px;
      background-color: ${({theme}) => theme.colors.accent};
      color: white;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
    }

    @media screen and (max-width: 1280px) {
      display: none;
      &:first-of-type {
        display: block;
      }
    }
  }
`
export const User = styled.span`
  margin-left: 5px;
  font-size: 24px;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`
