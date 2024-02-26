import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateSchool from './pages/create/CreateSchool';
import './assets/css/style.css';
import './index.css';
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
import Tarifs from './pages/Tarifs';
import Devoirs from './pages/Devoirs.js';
import Layout from './Layout.js';
import GenerateDoc from './pages/GenerateDoc.js';

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/create/school' element={<CreateSchool />} />
        <Route exact path='/salles' element={<ClassesList />} />
        <Route exact path='/salles/:numSalle' element={<ViewSalle />} />
        <Route exact path='/documents' element={<Documents />} />
        <Route exact path='/documents/:matStudent' element={<Documents />} />
        <Route exact path='/matieres' element={<MatieresList />} />
        <Route exact path='/inscription' element={<Inscription />} />
        <Route exact path='/enseignement/:salle' element={<Enseignement />} />
        <Route exact path='/emploi-du-temps' element={<Planning />} />
        <Route exact path='/emploi-du-temps/:salle' element={<ViewEmploiTemps />} />
        <Route exact path='/presences/:salle' element={<Presences />} />
        <Route exact path='/gestion-notes' element={<Notes />} />
        <Route exact path='/gestion-calendrier' element={<Evaluations />} />
        <Route exact path='/recap-evaluations' element={<RecapEnseignement />} />
        <Route exact path='/salles/:numSalle/notes' element={<ViewNote />} />
        <Route exact path='/students' element={<Students />} />
        <Route exact path='/students/:matricule' element={<ViewStudent />} />
        <Route exact path='/administration' element={<Administration />} />
        <Route exact path='/parents' element={<Parents />} />
        <Route exact path='/parents/:matricule' element={<ViewParent />} />
        <Route exact path='/teachers' element={<Enseignants />} />
        <Route exact path='/teachers/:matricule' element={<ViewEnseignant />} />
        <Route exact path='/events' element={<Events />} />
        <Route exact path='/messagerie' element={<Messagerie />} />
        <Route exact path='/tarifs' element={<Tarifs />} />
        <Route exact path='/devoirs/:salle' element={<Devoirs />} />
        <Route exact path='/generate-doc' element={<GenerateDoc />} />
        <Route exact path='/*' element={<Notfound />} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
