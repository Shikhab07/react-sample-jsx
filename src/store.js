import {
    createStore
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware } from 'redux'
import  rootSaga  from './saga/sagas';
// import {
//     VisibilityFilters
// } from './actions'
import todoAppCombinedReducer from './reducers'

const sagaMiddleware= createSagaMiddleware();

const createstore = createStore(todoAppCombinedReducer ,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default createstore;