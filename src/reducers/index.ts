import { combineReducers } from 'redux';
import testSlice from './TestSlice';
import userSlice from './UserSlice';

const rootReducer = combineReducers({
    test: testSlice.reducer,
    user: userSlice.reducer,
});

// https://redux-toolkit.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
