import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../layout/Home';

const isProduction = process.env.NODE_ENV === 'production';
const basename = isProduction ? process.env.PUBLIC_URL : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path={process.env.REACT_APP_PROTECTING_HASH} element={<p>EFEFEFEFEFEFEEEEE</p>} />
    </Route>
  ),
  {
    basename,
  }
);

export default router;
