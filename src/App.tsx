import { useState } from 'react';
import './App.css';
import ConferencePlan from './components/conferencePlan';
import ProductSelectionPage from './components/VenueSelection';

function App() {
  const [started, setStarted] = useState(false);

  return started ? (
    <ProductSelectionPage onBack={() => setStarted(false)} />
  ) : (
    <ConferencePlan onGetStarted={() => setStarted(true)} />
  );
}

export default App;
