// Actions are payloads of information that send data from your application to your store
/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

/*
 * action creators
 */
let nextToDoId=0;
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextToDoId++,
  text
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};


export const getNews = () =>({
  type: 'GET_NEWS'
});

export const uploadFile = (files) =>({
  type: 'UPLOAD_FILE',
  files
});

export const setFiles = (files) =>({
  type: 'SET_FILES',
  files
});
