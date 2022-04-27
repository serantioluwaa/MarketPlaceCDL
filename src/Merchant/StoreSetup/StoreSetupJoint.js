import BankInfo from './bankinfo';
import BusinessInfo from './businessinfo'
import StoreInfo from './storeinfo'
import Summary from './summary'
import Storeheader from './Storeheader'
import Footer from '../../Appfooter2'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Storeheader />
      </div>
      <div>
        <Routes>
          <Route exact path='/BankInfo' element={<BankInfo />} />
          <Route exact path='/BusinessInfo' element={<BusinessInfo />} />
          <Route exact path='/StoreInfo' element={<StoreInfo />} />
          <Route exact path='/Summary' element={<Summary />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
