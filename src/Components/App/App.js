import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from '../ArtList/Reducers'
import Search from '../Search/Search'

import Logo from '../../logo.svg'
import Logo2 from '../../logo2.svg'
import Phone from '../../phone.svg'
import Adres from '../../adres.svg'

import Delivery from '../Pages/Delivery/Delivery'
import Basket from '../Pages/Basket/Basket'
import Contacts from '../Pages/Contacts/Contacts'
import About from '../Pages/About/About'
import Home from '../Pages/Home/Home'

const store = createStore(allReducers);

const items = [
  { to: '/', label: 'Каталог' },
  { to: '/delivery', label: 'Доставка' },
  { to: '/basket', label: 'Оплата' },
  { to: '/contacts', label: 'Контакты' },
  { to: '/about', label: 'О галерее' },
]

function App() {
  return (
    <Provider store={store}>
       <Router>
         <div className='page'>
         <div id='loaderBox'></div>
         <div className='header'>
          <div className='container'>
            <div className='menu'>
              <nav>
                <a href="/"><img src={Logo} alt="Twitter" ></img></a>
                  {items.map(({ to, label }) => (
                    <div className="nav-item" key={to}>
                      <Link key={to} to={to}>
                        {label}
                      </Link>
                    </div>
                  ))}
              </nav>
            </div>
            <Search />
          </div>
         </div>
          <Switch>
            <Route path="/delivery">
                <Delivery />
            </Route>
            <Route path="/basket">
              <Basket />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
          <footer className="page-footer">
          <div className="container ">
            <div className='menu bc'>
              <nav>
                <a href="/"><img src={Logo2} alt="Twitter" ></img></a>
                  {items.map(({ to, label }) => (
                    <div className="nav-item" key={to}>
                      <Link key={to} to={to}>
                        {label}
                      </Link>
                    </div>
                  ))}
              </nav>
            </div>
            <div className='contacts'>
              <div className='phone'>
                <img src={Phone} alt="+7 (495) 555-55-55"></img>
                <a href="tel:+74955555555">+7 (495) 555-55-55</a>
              </div>
              <div className='mail'>
                <img src={Adres} alt="г. Москва, ул. Расплетина, 24"></img>
                <a href="https://yandex.ru/maps/?text=г. Москва, ул. Расплетина, 24">г. Москва, ул. Расплетина, 24</a>    
              </div>
                       
            </div>
          </div>
        </footer>
      </Router>
    </Provider>
  );
}

export default App;
