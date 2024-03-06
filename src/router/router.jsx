import loadable from '@loadable/component';
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

const TripHome = loadable(() => import('../components/home/home'));
const UracleHome = loadable(() => import('../components/home/uracleHome'));
const Option = loadable(() => import('../components/options/option'));
const Countries = loadable(() => import('../components/countries/countries'));

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<UracleHome />} />
            <Route path="/tripHome" element={<TripHome />} />
            <Route path="/tripMBTI" element={<Option />} />
            <Route path="result/:countryName" element={<Countries />} />
            <Route path="*" element={'no match page'} />
        </>
    )
);
export default router;
