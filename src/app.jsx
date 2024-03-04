import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './common/css/globalStyle';
import router from './router/router';
const App = () => {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router}/>
        </>
    );
};

export default App;