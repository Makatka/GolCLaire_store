import React from 'react';
import InfoCard from "../InfoCard/InfoCard";
import {TbRefreshAlert} from "react-icons/tb";
import {MdPriceCheck, MdMarkUnreadChatAlt} from "react-icons/md";
import {ShopGuaranteeStyles} from "./ShopGwarantee.styles";

const ShopGuarantee = () => {
  return (
    <ShopGuaranteeStyles>
      <InfoCard
        icon={<MdMarkUnreadChatAlt/>}
        cardHeader="24 hour fast customer service"
        cardDetails="Get support without waiting, shop faster."
      />
      <InfoCard
        icon={<MdPriceCheck/>}
        cardHeader="Best Market Price Guarantee"
        cardDetails="We do not mislead the customer, transparent trade."
      />
      <InfoCard
        icon={<TbRefreshAlert/>}
        cardHeader="Try Price Change Alerts"
        cardDetails="Meet maximum discounts."
      />
    </ShopGuaranteeStyles>


  );
};

export default ShopGuarantee;