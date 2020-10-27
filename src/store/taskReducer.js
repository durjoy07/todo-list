import { SET_COMPLETED, SET_TODOS, SET_INACTIVE } from './action';

const createData = (task, done) => {
  return { task, done };
};

const initialState = {
  todos: [
    createData('prayer', false),
    createData('morning walk', false),
    createData('go to bazar', false),
    createData('buy a book', false),
    createData('outing with friends', false),
    createData('reading book', false),
  ],
  inactiveItem: [],
  completed: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: payload };
    case SET_COMPLETED:
      return { ...state, completed: payload };
    case SET_INACTIVE:
      return { ...state, inactiveItem: payload };
    default:
      return state;
  }
}
