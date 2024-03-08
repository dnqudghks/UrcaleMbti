import loadable from '@loadable/component';
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import Result from '../components/popup/result';

const TripHome = loadable(() => import('../components/home/tripHome'));
const Test1Home = loadable(() => import('../components/home/test1Home'));
const Test2Home = loadable(() => import('../components/home/test2Home'));
const Test3Home = loadable(() => import('../components/home/test3Home'));
const Test4Home = loadable(() => import('../components/home/test4Home'));
const UracleHome = loadable(() => import('../components/home/uracleHome'));
const Trip = loadable(() => import('../components/thema/trip'));
const Test1 = loadable(() => import('../components/thema/test1'));
const Test2 = loadable(() => import('../components/thema/test2'));
const Test3 = loadable(() => import('../components/thema/test3'));
const Test4 = loadable(() => import('../components/thema/test4'));
const Countries = loadable(() =>
    import('../components/result/countries/countries')
);
const Test1Result = loadable(() =>
    import('../components/result/test1/countries')
);
const Test2Result = loadable(() =>
    import('../components/result/test2/countries')
);
const Test3Result = loadable(() =>
    import('../components/result/test3/countries')
);
const Test4Result = loadable(() =>
    import('../components/result/test4/countries')
);

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* 루트페이지 */}
            <Route path="/" element={<UracleHome />} />

            {/* 테마별 시작 페이지 */}
            <Route path="/tripHome" element={<TripHome />} />
            <Route path="/test1Home" element={<Test1Home />} />
            <Route path="/test2Home" element={<Test2Home />} />
            <Route path="/test3Home" element={<Test3Home />} />
            <Route path="/test4Home" element={<Test4Home />} />
            <Route path="/tripMbti" element={<Trip />} />

            {/* 테마별 질문 페이지 */}
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="/test3" element={<Test3 />} />
            <Route path="/test4" element={<Test4 />} />

            {/* 팝업창 적용 테마별 결과페이지 */}
            <Route path="result/trip/:countryName" element={<Result />} />
            {/* 테마별 결과페이지 */}
            <Route path="result/test1/:test1Name" element={<Test1Result />} />
            <Route path="result/test2/:test2Name" element={<Test2Result />} />
            <Route path="result/test3/:test3Name" element={<Test3Result />} />
            <Route path="result/test4/:test4Name" element={<Test4Result />} />

            {/* url 없을 경우 대체페이지 */}
            <Route path="*" element={'no match page'} />
        </>
    )
);
export default router;
