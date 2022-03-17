import React from 'react';

import { DropdownOption } from './DropdownOption';

export const Dropdown = (props) => {
  const { label, links } = props;

  return (
    <div className="dropdown">
      <span>
        <a href={label.url}>{label.title}</a>
      </span>
      <ul className="options">
        {links &&
          links.map((el) => (
            <DropdownOption title={el.title} url={el.url} key={el.title} />
          ))}
      </ul>
    </div>
  );
};
