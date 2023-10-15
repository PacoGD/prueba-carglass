import { useState } from "react";

const List = (props) => {
  const [items, setItems] = useState(props.items);

  const handleItemClick = (index) => {
    const clickedItem = items[index];
    const updatedItems = items.filter((_, i) => i !== index);
    setItems([clickedItem, ...updatedItems]);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => handleItemClick(index)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
