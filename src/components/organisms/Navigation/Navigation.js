import React from 'react';
import {Container} from "../../templates/Container/Container";
import {HiOutlineBars3} from 'react-icons/hi2';
import {BsSearch, BsArrowRepeat, BsHandbag, BsSuitHeart} from 'react-icons/bs';
import {HiOutlineUser} from 'react-icons/hi';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {NavWrapper, NavItem, Logo, Nav, UserActions, User, Search} from './Navigation.styles'

const Navigation = () => {
  return (
    <NavWrapper>
      <Container>

        <div>
          <HiOutlineBars3/>
          <Logo>GOLDCLAIRE</Logo>
        </div>
        <ul>
          <NavItem isDisabled><a href="#">Home</a><MdOutlineKeyboardArrowDown/></NavItem>
          <NavItem><a href="#">Shop</a><MdOutlineKeyboardArrowDown/></NavItem>
          <NavItem isDisabled><a href="#">Product</a><MdOutlineKeyboardArrowDown/></NavItem>
          <NavItem><a href="#">Templates</a><MdOutlineKeyboardArrowDown/></NavItem>
          <NavItem isDisabled><a href="#">Pages</a><MdOutlineKeyboardArrowDown/></NavItem>
          <NavItem><a href="#">Mega</a><MdOutlineKeyboardArrowDown/></NavItem>
        </ul>
        <div>
          <Search>
            <BsSearch/>
          </Search>
          <UserActions>
            <li>
              <span>0</span>
              <BsHandbag/>
            </li>
            <li>
              <span>1</span>
              <BsSuitHeart/>
            </li>
            <li>
              <span>5</span>
              <BsArrowRepeat/>
            </li>
          </UserActions>
          <User>
            <HiOutlineUser/>
          </User>
        </div>
      </Container>

    </NavWrapper>
  );
};

export default Navigation;