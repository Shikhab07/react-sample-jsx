import {
  put,
  takeEvery,
  cancelled
} from 'redux-saga/effects'

// Unlike takeEvery, takeLatest allows only one fetchData task to run at any moment.
// And it will be the latest started task. If a previous task is still running 
// when another fetchData task is started, the previous task will be automatically cancelled.


// An Effect is an object that contains some information to be interpreted by the middleware. 
// effects are like instructions to the middleware to perform some operation 


// create delay
// const delay = (ms) => new Promise(res => setTimeout(res, ms))

// worker
export function* fetchNews() {
  try {

    // const request = new Request('https://randomuser.me/api/?results=10', {
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //      'token': 'Bearer'
    //   })
    // });

    // const json = yield fetch(request).then(results => {
    //   return results.json();
    // });

    const json = yield fetch('https://randomuser.me/api/?results=10').then(results => {
      return results.json();
    });
   
    yield put({
      type: "NEWS_RECEIVED",
      json: json.results
    });

  } catch (error) {
    yield put({
      type: "NEWS_RECIEVED_ERROR",
      error
    });
  } 
  finally {
    if (yield cancelled()) {
      yield put({
        type: "NEWS_RECIEVED_TEST",
        res: 'Lorem ipsum'
      });
    }
  }
}

// watcher
export function* getNewsActionWatcher() {
    yield takeEvery('GET_NEWS', fetchNews); // action , worker
  // while (true) {
  //   yield take('GET_NEWS')
  //   const task = yield fork(fetchNews);
  //   const action = yield take('NEWS_RECEIVED')
  //   if (action.type === 'NEWS_RECEIVED')
  //     yield cancel(task)
  // }

  // let currentTask;

  // while(true) {
  //   const action = yield take('GET_NEWS');
    
  //   if(currentTask) {
  //     yield cancel(currentTask);
  //   }

  //   currentTask = yield fork(fetchNews);
  // }
}


export default function* rootSaga() {
  yield getNewsActionWatcher();
}


// use them in parallel
// export default function* rootSaga() {
//   yield takeEvery('FETCH_USERS', fetchUsers)
//   yield takeEvery('CREATE_USER', createUser)
// }