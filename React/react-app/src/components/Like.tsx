import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

export const Like = ({ onClick }: Props) => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
    onClick();
  };

  if (state)
    return <FaHeart onClick={toggle} color="#ff6b81" size={20}></FaHeart>;
  return <FaRegHeart size={20} onClick={toggle}></FaRegHeart>;
};

export default Like;
