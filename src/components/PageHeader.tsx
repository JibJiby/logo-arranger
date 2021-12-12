import styled from '@emotion/styled';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reducers/index';
import userSlice, { UserInitialStateType } from '@reducers/UserSlice';
import { useHistory } from 'react-router-dom';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: green;

    height: 64px;
    padding: 30px;

    /* design base 참고 */
    /* https://designbase.co.kr/magazine_categories/design_snack/ */
    @media only screen and (max-width: 768px) {
        background-color: yellow;
        padding: 20px;
    }

    @media only screen and (max-width: 480px) {
        background-color: black;
        padding: 10px;
    }
`;

const HomeLogo = styled.div`
    background-color: lightgray;

    font-size: 20px;
    cursor: pointer;
    font-family: 'NotoSans KR';
    user-select: none; /*  드래그 불가능  */
`;

const LoginButton = styled.button`
    border: 1px solid #fee500;
    background-color: #fee500;
    border-radius: 6px;
    padding: 15px 10px;
    color: #191919;
    font-size: 16px;
    font-weight: 700;
    height: 50px;
    width: 100px;
`;

const PageHeader = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { isLogged } = useSelector<RootState, UserInitialStateType>(
        (state) => state.user
    );

    const onHomeLogoClick = useCallback(() => {
        history.push('/');
    }, []);

    const onLoginClick = useCallback((e) => {
        e.preventDefault();
        dispatch(userSlice.actions.changeUserState());
    }, []);

    return (
        <Header>
            <HomeLogo>홈버튼</HomeLogo>
            {isLogged ? (
                <LoginButton onClick={onLoginClick}> 로그아웃 </LoginButton>
            ) : (
                <LoginButton type="button" onClick={onLoginClick}>
                    로그인
                </LoginButton>
            )}
        </Header>
    );
};

export default PageHeader;
