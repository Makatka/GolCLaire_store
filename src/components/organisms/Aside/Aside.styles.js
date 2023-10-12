import styled from "styled-components";
import InfoCard from "../../molecules/InfoCard/InfoCard";


export const AsideSection = styled.aside`
  width: 400px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 20px;
  padding-right: 20px;


`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ProductsWrapper = styled.div`
  border: 2px solid ${({theme}) => theme.colors.accent};
  border-top: none;
  margin-top: -2px;
  padding: 25px 25px 25px 5px;
  
`