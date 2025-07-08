import React from "react";

const ListComponent = ({ items}) => {
  if (!items.length) return <p>No items to display.</p>;

  return (
    <ul>
      {items.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> – {user.email}
        </li>
))}
    </ul>
);
};

export default ListComponent;
