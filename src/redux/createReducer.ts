import { ActionType } from 'ts/types';
import has from 'lodash/has';
import omit from 'lodash/omit';

type actionMapType = {
  [key: string]: any;
};

const createReducer = (initialState = {}, actionMap: actionMapType) => {
  return (state = initialState, action: ActionType) => {
    if (has(actionMap, action.type)) {
      // pass just the payload and not type
      const actionWithoutType = omit(action, ['type']);

      if (typeof actionMap[action.type] === 'function') {
        return actionMap[action.type](state, actionWithoutType);
      } else if (typeof actionMap[action.type] === 'string') {
        return { ...state, ...actionWithoutType };
      }
    }
    return state;
  };
};

export default createReducer;
