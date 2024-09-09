import React from "react";

interface Props {
  cardItemsCount: number;
}
const NavBar = ({ cardItemsCount }: Props) => {
  return <div>NavBar: {cardItemsCount}</div>;
};

export default NavBar;
