import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
