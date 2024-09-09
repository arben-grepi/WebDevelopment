import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

function ExpandableText({ children, maxChars = 100 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "show less" : "show more"}
      </button>
    </p>
  );
}

export default ExpandableText;
