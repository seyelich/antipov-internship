import { Route, Routes } from 'react-router';
import { SignUpPage } from '../../pages/auth/signup';
import { BrowserRouter } from 'react-router-dom';
import { SignInPage } from '../../pages/auth/signin';
import { NotFoundPage } from '../../pages/notfound';
import { CardsPage } from '../../pages/cards';
import { CardDetailsPage } from '../../pages/card-details';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CardsPage/>} />
          <Route path='signup' element={<SignUpPage/>} />
          <Route path='signin' element={<SignInPage/>} />
          <Route path='/:id' element={<CardDetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
