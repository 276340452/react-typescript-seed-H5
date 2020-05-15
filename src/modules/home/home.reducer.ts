/* 异步请求 */
// import { REQUEST, SUCCESS, FAILURE } from 'shared/util/action-type.util';

export const ACTION_TYPES = {
};

const initialState = {
  loading: false,
};
export type HomeState = Readonly<typeof initialState>;

// Reducer
export default (state: HomeState = initialState, action: any): HomeState => {
  switch (action.type) {
    default:
      return state;
  }
};
// Action
