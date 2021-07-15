import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import DragBox from './DragBox';
import Resizable1 from './Resizable';
import Resizable2 from './Resizable/index2';
import DragList from './DragList';


// components

import Creat from './components/Creat';
import Context from './components/Context';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DragBox} />
        <Route exact path="/drag-box" component={DragBox} />
        <Route exact path="/resize1" component={Resizable1} />
        <Route exact path="/resize2" component={Resizable2} />
        <Route exact path="/drag-list" component={DragList} />
        <Route exact path="/creat" component={Creat} />
        <Route exact path="/context" component={Context} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router