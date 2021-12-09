import Layout from '@layout/index';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import testSlice, { InitialStateType } from '../reducers/TestSlice';
import { RootState } from '../reducers';
import { css } from '@emotion/react';
const IndexPage = () => {
    // unknown 에러
    // https://stackoverflow.com/questions/57472105/react-redux-useselector-typescript-type-for-state
    const { test } = useSelector<RootState, InitialStateType>(
        (state) => state.test
    );
    const dispatch = useDispatch();

    return (
        <Layout>
            <div className="App">
                <div>
                    현재 값{' '}
                    <span
                        css={css`
                            background-color: yellow;
                        `}
                    >
                        {test}
                    </span>
                </div>
                <button
                    onClick={() => dispatch(testSlice.actions.setTest('바뀜'))}
                >
                    변환
                </button>
            </div>
        </Layout>
    );
};

export default IndexPage;
