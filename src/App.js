import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateSchool from './pages/create/CreateSchool';
import './assets/css/style.css';
import Notfound from './pages/Notfound';
import ClassesList from './pages/ClassesList';
import ViewSalle from './pages/views/ViewSalle';
import Documents from './pages/Documents';
import MatieresList from './pages/MatieresList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/create/school' element={<CreateSchool />}></Route>
        <Route exact path='/salles' element={<ClassesList />}></Route>
        <Route exact path='/salles/:numSalle' element={<ViewSalle />}></Route>
        <Route exact path='/documents' element={<Documents />}></Route>
        <Route exact path='/documents/:matStudent' element={<Documents />}></Route>
        <Route exact path='/matieres' element={<MatieresList />}></Route>
        <Route exact path='/*' element={<Notfound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
