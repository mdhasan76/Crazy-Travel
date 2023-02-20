import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routs/routes';

function App() {
  return (
    <div className="App max-w-[1400px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
