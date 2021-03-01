import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ToDoPage from '../pages/ToDoPage';

const App = () => {
  return (
    <BrowserRouter> 
      <Switch>
       
        <Route path="/" component={ToDoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;