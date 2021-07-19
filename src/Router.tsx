import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';

// rxjs
import DragBox from './Rxjs/DragBox';
import Resizable1 from './Rxjs/Resizable';
import Resizable2 from './Rxjs/Resizable/index2';
import DragList from './Rxjs/DragList';

import Creat from './Rxjs/Creat';


// react
import Effect from './React/Effect';
import Context from './React/Context';


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/rxjs/drag-box" component={DragBox} />
        <Route exact path="/rxjs/resize1" component={Resizable1} />
        <Route exact path="/rxjs/resize2" component={Resizable2} />
        <Route exact path="/rxjs/drag-list" component={DragList} />
        <Route exact path="/creat" component={Creat} />

        <Route exact path="/react/effect" component={Effect} />
        <Route exact path="/react/context" component={Context} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router