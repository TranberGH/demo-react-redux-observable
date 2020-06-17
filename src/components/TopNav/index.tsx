import React from 'react';
import { Link } from 'react-router-dom';

import './TopNav.scss';

interface ItemNav {
  url: string;
  text: string;
}

interface TopNavProps {
  items: ItemNav[];
}

export default function TopNav(props: TopNavProps) {
  const { items } = props;

  return (
    <nav className="top-nav">
      <ul>
        {items.map((item: ItemNav, index: number) => {
          const { url, text } = item;
          return (
            <li key={`nav-item-${index}`} className="nav-item">
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
