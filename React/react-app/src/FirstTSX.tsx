function Message() {
  //JSX: JavaScript XML
  const name = "Arben";
  //if name is truthy
  if (name) return <h1>Hello {name}</h1>;
  else return <h1>Hello World</h1>;
}

export default Message;
