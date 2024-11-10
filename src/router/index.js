import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<p>efefe?</p>} />
      <Route path={process.env.REACT_APP_PROTECTING_HASH} element={<p>EFEFEFEFEFEFE</p>} />
    </Route>
  )
);

export default router;