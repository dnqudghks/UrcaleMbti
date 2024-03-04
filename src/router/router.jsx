import loadable from "@loadable/component";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const Home = loadable(() => import("../components/home/home"))
const Option = loadable(() => import("../components/options/option"))
const Countries = loadable(() => import("../components/countries/countries"))

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home/>}/>
            <Route path="/tripMBTI" element={<Option/>} />
            <Route path="result/:countryName" element={<Countries/>}/>
            <Route path="*" element={"no match page"} />
        </>
    )
)
export default router;