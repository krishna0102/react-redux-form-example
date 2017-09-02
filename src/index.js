import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import PostIndex from './components/post_index';
import PostsNew from './components/posts_new';
import PostShow from './components/post_show';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Switch>
                            <Route path="/posts/new" component={PostsNew}/>
                            <Route path="/posts/:id" component={PostShow}/>
                            <Route path="/" component={PostIndex}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
