import Counter from './component/Counter';

import './App.css';
import TextInput from './component/TextInput';
import { useState } from 'react';

// Import all static data here
const details = {
  name: "lars",
  gender: "male",
}

function App() {
  const [ state, setState ] = useState(null);

  return (
    <div className="App">
      
      <Counter />

      <TextInput data={details} />
    
    </div>
  );
}

export default App;
