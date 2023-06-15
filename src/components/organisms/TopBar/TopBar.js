import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai';
import {Wrapper, FlexWrapper} from "./TopBar.styles";
import {Container} from "../../templates/Container/Container";

const TopBar = () => {
  return (
    <Wrapper>
     <Container>
     <FlexWrapper>
       <ul>
         <li><BsFacebook/></li>
         <li><AiOutlineTwitter/></li>
         <li><AiFillYoutube/></li>
       </ul>
       <span>You can pay with cryptocurrencies!</span>
       <ul>
         <li><a href="#">Cart</a></li>
         <li><a href="#">Search</a></li>
         <li><a href="#">Help</a></li>
       </ul>
     </FlexWrapper>
     </Container>
    </Wrapper>
  );
};

export default TopBar;