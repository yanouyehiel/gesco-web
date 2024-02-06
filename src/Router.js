import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateSchool from './pages/create/CreateSchool';
import './assets/css/style.css';
import './assets/js/main.js';
import Notfound from './pages/Notfound';
import ClassesList from './pages/ClassesList';
import ViewSalle from './pages/views/ViewSalle';
import Documents from './pages/Documents';
import MatieresList from './pages/MatieresList';
import Inscription from './pages/Inscription';
import Enseignement from './pages/Enseignement';
import Planning from './pages/Planning';
import ViewEmploiTemps from './pages/views/ViewEmploiTemps';
import Presences from './pages/Presences';
import Notes from './pages/Notes';
import Evaluations from './pages/Evaluations';
import RecapEnseignement from './pages/RecapEnseignement';
import ViewNote from './pages/views/ViewNote';
import Students from './pages/Students';
import ViewStudent from './pages/views/ViewStudent';
import Administration from './pages/Administration';
import Parents from './pages/Parents';
import Enseignants from './pages/Enseignants';
import Events from './pages/Events';
import Messagerie from './pages/Messagerie';
import ViewEnseignant from './pages/views/ViewEnseignant';
import ViewParent from './pages/views/ViewParent';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import Tarifs from './pages/Tarifs';
import { useState } from 'react';
import { hasAuthenticated } from './services/AuthApi';
import Auth from './contexts/Auth';
import Devoirs from './pages/Devoirs.js';

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated)

  return (
    <Auth.Provider value={{isAuthenticated, setIsAuthenticated}}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/create/school' element={<CreateSchool />}></Route>
          <Route exact path='/salles' element={<ClassesList />}></Route>
          <Route exact path='/salles/:numSalle' element={<ViewSalle />}></Route>
          <Route exact path='/documents' element={<Documents />}></Route>
          <Route exact path='/documents/:matStudent' element={<Documents />}></Route>
          <Route exact path='/matieres' element={<MatieresList />}></Route>
          <Route exact path='/inscription' element={<Inscription />}></Route>
          <Route exact path='/enseignement/:salle' element={<Enseignement />}></Route>
          <Route exact path='/emploi-du-temps' element={<Planning />}></Route>
          <Route exact path='/emploi-du-temps/:salle' element={<ViewEmploiTemps />}></Route>
          <Route exact path='/presences/:salle' element={<Presences />}></Route>
          <Route exact path='/gestion-notes' element={<Notes />}></Route>
          <Route exact path='/gestion-evaluations' element={<Evaluations />}></Route>
          <Route exact path='/recap-evaluations' element={<RecapEnseignement />}></Route>
          <Route exact path='/salles/:numSalle/notes' element={<ViewNote />}></Route>
          <Route exact path='/students' element={<Students />}></Route>
          <Route exact path='/students/:matricule' element={<ViewStudent />}></Route>
          <Route exact path='/administration' element={<Administration />}></Route>
          <Route exact path='/parents' element={<Parents />}></Route>
          <Route exact path='/parents/:matricule' element={<ViewParent />}></Route>
          <Route exact path='/teachers' element={<Enseignants />}></Route>
          <Route exact path='/teachers/:matricule' element={<ViewEnseignant />}></Route>
          <Route exact path='/events' element={<Events />}></Route>
          <Route exact path='/messagerie' element={<Messagerie />}></Route>
          <Route exact path='/tarifs' element={<Tarifs />}></Route>
          <Route exact path='/devoirs/:salle' element={<Devoirs />}></Route>
          <Route exact path='/*' element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </Auth.Provider>
  );
}

export default Router;