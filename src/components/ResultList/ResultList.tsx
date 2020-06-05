import React from 'react';
import { Link } from 'react-router-dom';

interface ResultListProps {
  items: any[];
  listClasses: string[];
  itemClasses: string[];
  link: boolean;
}

// search

// id
// name: city

// regions

// id: codeRegion
// name: nom

/**
 * Display list of items
 * @param props {Object}
 */
function ResultList(props: ResultListProps) {
  const { items, listClasses, itemClasses, link } = props;

  return (
    <>
      {items && (
        <ul className={listClasses.join(' ') || 'result-list'}>
          {items.map(item => {
            const { id: itemId, name: itemName } = item.properties;
            return (
              <li
                key={`city-${itemId}`}
                className={itemClasses.join(' ') || 'result-item'}
              >
                {link && (
                  <Link
                    to={{
                      pathname: `/city/${itemId}`,
                      state: item.properties
                    }}
                  >
                    {itemName}
                  </Link>
                )}
                {!link && itemName}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ResultList;
