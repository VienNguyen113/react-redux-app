import React from "react";
import { array } from "prop-types";

const List = props => {
  return (
    <ul className="List">
      {props.data.map(item => {
        return (
          <li key={item.match_number}>
            <p>{item.match_number}</p>
            <p>{item.location}</p>
            <p>{item.datetime}</p>
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  data: array.isRequired,
};

export default List;
