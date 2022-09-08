import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as api from './services/api';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {api.getCategories().then((categories) => { console.log(categories); })}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
