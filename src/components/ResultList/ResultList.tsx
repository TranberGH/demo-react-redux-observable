import * as React from 'react';
import { Link } from 'react-router-dom';

interface ResultListProps {
  items: any[];
  classes: {
    list: string[];
    item: string[];
  };
}

/**
 * Display list of items
 * @param props {Object}
 */
function ResultList(props: ResultListProps) {
  return (
    <>
    { props.items && <ul className={props.classes.list.join(' ') || 'result-list'}>
      { props.items.map(item => {
        return (
          <li key={`city-${item.id}`} className={props.classes.item.join(' ') || 'result-item'}>
            <Link to={{
              pathname: `/city/${item.id}`,
              state: { item }
            }}>{ item['city'] }</Link>
          </li>
        )
      }) }
    </ul> }
    </>
  )
}

export default ResultList;
