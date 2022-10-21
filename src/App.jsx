import './App.css'
import { createContext, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'

export const sectionContext = createContext();

function App() {

  const [activeSection,setActiveSection] = useState(null);
  const observerCallback = (ref) => {
    let observerData = ref[0];
    let observingElement = observerData.target;
    observerData.isIntersecting ? setActiveSection(observingElement) : null;
  }
  let observer = new IntersectionObserver(observerCallback,{threshold: 0.6});

  return (
    <sectionContext.Provider value={{activeSection,setActiveSection,observer}}>
      <div className="App flex-row-center">
        <Navbar />
        <Main />
      </div>
    </sectionContext.Provider>
  )
}

export default App;
