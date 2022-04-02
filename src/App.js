import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './component/Books/Books';
import Categories from './component/Categories/Categories';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/categories' element={<Categories />}></Route>
        <Route path='/books' element={<Books />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
