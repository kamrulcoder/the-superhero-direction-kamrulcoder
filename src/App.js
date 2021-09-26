
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DeveloperList from './components/DeveloperList/DeveloperList';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
      <Header/>
      <DeveloperList></DeveloperList>
    
    </div>
  );
}

export default App;
