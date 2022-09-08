import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';
import Lista from './componentes/Lista';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Lista } />
          <div>
            {api.getCategories().then((categories) => { console.log(categories); })}
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
