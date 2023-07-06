import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './containers/MainLayout'
import Dashboard from './pages/Dashboard'
import TransportOrder from './pages/TransportOrder';
import OrderList from './pages/OrderList';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/ordnomina" element={<OrderList />} />
          <Route exact path="/ordtransport" element={<TransportOrder />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
