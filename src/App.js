// import AddForm from './componenta/AddForm';

import './App.css';
import { useState } from 'react';
import Form from './componenta/Form';
 const addData=[]
function App() {
  const [data, setData] = useState(addData)
	function saveDatToList(dataWithId) {
		setData((prevState) => {
			return [ ...prevState,dataWithId]
		})
	}
  return (
    <div className="App">
     <Form onsaveDatToList={saveDatToList}
     addData={data}/>
		</div>
  );
}

export default App;
