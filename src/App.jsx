import './App.css';
import Header from './components/Header/Header';
import KnowledgeRoom from './components/KnowledgeRoom/KnowledgeRoom';

function App() {
  return (
    <div className="md:w-[70%] md:mx-auto mt-2">
      <Header />
      <KnowledgeRoom />
    </div>
  );
}

export default App;
