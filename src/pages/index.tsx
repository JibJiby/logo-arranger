import Layout from '@layout/index';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import testSlice, { InitialStateType } from '../reducers/TestSlice';
import { RootState } from '../reducers';
import { css } from '@emotion/react';
import LogoItem from '@components/LogoItem';
import {
    getFirestore,
    collection,
    getDocs,
    setDoc,
    doc,
    addDoc,
} from 'firebase/firestore';

// 참고 firebase api
// https://velog.io/@dev-hannahk/react-firebase-crud

const IndexPage = () => {
    // unknown 에러
    // https://stackoverflow.com/questions/57472105/react-redux-useselector-typescript-type-for-state
    const { test } = useSelector<RootState, InitialStateType>(
        (state) => state.test
    );
    const dispatch = useDispatch();
    const db = getFirestore();

    const addCbClick = useCallback(async () => {
        try {
            // // https://firebase.google.cn/docs/firestore/manage-data/add-data?hl=ko
            // await setDoc(doc(db, 'cities', 'LA1'), {
            //     name: 'Los Angeles',
            //     state: 'CA',
            //     country: 'USA',
            // });
            // console.log('완료!');
            const docRef = await addDoc(collection(db, 'users'), {
                first: 'Ada',
                last: 'Lovelace',
                born: 1815,
            });
            console.log('Document written with ID: ', docRef.id);
        } catch (e) {
            console.log(e);
        }
    }, [db]);

    useEffect(() => {
        async function testFunc() {
            try {
                const querySnapshot = await getDocs(collection(db, 'test'));
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                });
            } catch (error) {
                console.log('error');
                console.log(error);
            }
        }
        testFunc();
    }, []);

    return (
        <Layout>
            <div className="App">
                <LogoItem />
                <button onClick={addCbClick}>생산</button>
            </div>
        </Layout>
    );
};

export default IndexPage;
