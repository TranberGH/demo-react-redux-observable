import React from "react";
import { Link } from "react-router-dom";

import { Search, ResultList } from "components";

import "./Home.scss";

interface HomeProps {
  search: Function;
  cities: any[];
}

/**
 * Home page
 * @param props {Object}
 */
function Home(props: HomeProps) {
  return (
    <>
      <p className="top-block">
        <Link to="/regions">Rechercher par région et département</Link>
      </p>
      <div>
        <Search search={props.search} />
        <ResultList
          items={props.cities}
          listClasses={["cities-list"]}
          itemClasses={["city-item"]}
          link={true}
        />
      </div>
    </>
  );
}

export default Home;
