import loadable from '@loadable/component';
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

const TripHome = loadable(() => import('../components/home/home'));
const UracleHome = loadable(() => import('../components/home/uracleHome'));
const Trip = loadable(() => import('../components/thema/trip'));
const Test1 = loadable(() => import('../components/thema/test1'));
const Test2 = loadable(() => import('../components/thema/test2'));
const Test3 = loadable(() => import('../components/thema/test3'));
const Test4 = loadable(() => import('../components/thema/test4'));
const Countries = loadable(() =>
    import('../components/result/countries/countries')
);
const test1_result = loadable(() =>
    import('../components/result/test1/countries')
);
const test2_result = loadable(() =>
    import('../components/result/test2/countries')
);
const test3_result = loadable(() =>
    import('../components/result/test3/countries')
);
const test4_result = loadable(() =>
    import('../components/result/test4/countries')
);

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<UracleHome />} />
            <Route path="/tripHome" element={<TripHome />} />
            <Route path="/tripMbti" element={<Trip />} />
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="/test3" element={<Test3 />} />
            <Route path="/test4" element={<Test4 />} />
            <Route path="result/:countryName" element={<Countries />} />
            <Route path="result/:countryName" element={<test1_result />} />
            <Route path="result/:countryName" element={<test2_result />} />
            <Route path="result/:countryName" element={<test3_result />} />
            <Route path="result/:countryName" element={<test4_result />} />
            <Route path="*" element={'no match page'} />
        </>
    )
);
export default router;
