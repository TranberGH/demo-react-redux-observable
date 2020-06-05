import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Regions } from '../../pages';
import City from '../City/City';

import './App.scss';

export default function Page(props: any) {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Recherche des communes</h1>
      </header>
      <main className="page-content">
        <Router>
          <Route path="/" exact={true} component={Home} />
          <Route path="/city/:cityId" component={City} />
          <Route path="/regions" component={Regions} />
        </Router>
      </main>
      <footer className="app-footer">
        Utilise l’api <b>geo.api.gouv.fr</b>
      </footer>
    </div>
  );
}
