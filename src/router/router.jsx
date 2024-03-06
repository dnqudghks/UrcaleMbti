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
const Countries = loadable(() => import('../components/countries/countries'));

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
            <Route path="*" element={'no match page'} />
        </>
    )
);
export default router;
