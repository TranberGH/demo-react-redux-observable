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
  return (
    <>
    { props.items && <ul className={props.listClasses.join(' ') || 'result-list'}>
      { props.items.map(item => {
        return (
          <li key={`city-${item.id}`} className={props.itemClasses.join(' ') || 'result-item'}>
            { props.link && (
              <Link to={{
                pathname: `/city/${item.id}`,
                state: { item }
              }}>{ item.name }</Link>
            )}
            { !props.link && (
              item.name
            )}
          </li>
        )
      }) }
    </ul> }
    </>
  )
}

export default ResultList;
