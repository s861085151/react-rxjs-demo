import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';

// rxjs
import DragBox from './RxjsHooks/DragBox';
import Resizable1 from './RxjsHooks/Resizable';
import Resizable2 from './RxjsHooks/Resizable/index2';
import DragList from './RxjsHooks/DragList';

import Creat from './Rxjs/Create';
import Of from './Rxjs/Of';
import Range from './Rxjs/Range';
import Generate from './Rxjs/Generate';
import Repeat from './Rxjs/Repeat';
import Interval from './Rxjs/Interval';
import Timer from './Rxjs/Timer';
import From from './Rxjs/From';
import FromEvent from './Rxjs/FromEvent';
import FromEventPattern from './Rxjs/FromEventPattern';
import Ajax from './Rxjs/Ajax';
import RepeatWhen from './Rxjs/RepeatWhen';
import Defer from './Rxjs/Defer';
import Concat from './Rxjs/Concat';
import Merge from './Rxjs/Merge';
import Zip from './Rxjs/Zip';
import CombineLatest from './Rxjs/CombineLatest';


// react
import Effect from './React/Effect';
import Context from './React/Context';
import Memo from './React/Memo';


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/rxjs-hooks/drag-box" component={DragBox} />
        <Route exact path="/rxjs-hooks/resize1" component={Resizable1} />
        <Route exact path="/rxjs-hooks/resize2" component={Resizable2} />
        <Route exact path="/rxjs-hooks/drag-list" component={DragList} />

        <Route exact path="/rxjs/creat" component={Creat} />
        <Route exact path="/rxjs/of" component={Of} />
        <Route exact path="/rxjs/range" component={Range} />
        <Route exact path="/rxjs/generate" component={Generate} />
        <Route exact path="/rxjs/repeat" component={Repeat} />
        <Route exact path="/rxjs/interval" component={Interval} />
        <Route exact path="/rxjs/timer" component={Timer} />
        <Route exact path="/rxjs/from" component={From} />
        <Route exact path="/rxjs/fromEvent" component={FromEvent} />
        <Route exact path="/rxjs/fromEventPattern" component={FromEventPattern} />
        <Route exact path="/rxjs/ajax" component={Ajax} />
        <Route exact path="/rxjs/repeatWhen" component={RepeatWhen} />
        <Route exact path="/rxjs/defer" component={Defer} />
        <Route exact path="/rxjs/concat" component={Concat} />
        <Route exact path="/rxjs/merge" component={Merge} />
        <Route exact path="/rxjs/zip" component={Zip} />
        <Route exact path="/rxjs/combineLatest" component={CombineLatest} />

        <Route exact path="/react/effect" component={Effect} />
        <Route exact path="/react/context" component={Context} />
        <Route exact path="/react/memo" component={Memo} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router