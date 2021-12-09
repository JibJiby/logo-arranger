import { combineReducers } from 'redux';
import testSlice from './TestSlice';

const rootReducer = combineReducers({
    test: testSlice.reducer,
});

// https://redux-toolkit.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
