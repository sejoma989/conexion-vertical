/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />
      { initialState.mylist ? '...cargando' : (
        <Categories title='Mi lista principal'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Novedades'>
        <Carousel>
          <>
            {!initialState.trends ? '...cargando' :
              initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          </>
        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          <>
            {!initialState.originals ? '...cargando' :
              initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
          </>
        </Carousel>
      </Categories>

      <Footer />

    </div>
  );
};

export default App;
