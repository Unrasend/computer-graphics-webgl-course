import { ReactFCEmptyProps } from './types/react-fc-empty-props.type.ts';

import './App.scss';
import { AppProvider } from './App.provider.tsx';
import {RouterProvider} from "react-router-dom";
import { AppRouter } from './App.routes.tsx';

const App: ReactFCEmptyProps = () => (
  <AppProvider>
    <RouterProvider router={AppRouter} />
  </AppProvider>
);

export default App;
