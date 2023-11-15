import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  /* For state management, I considered using useState and passing the desired variable or 
      method to the corresponding component because I wanted to keep this assessment as close 
      to scratch as possible. The other options were to use React Context, Zustand, 
      or even Redux for state management, but considering the scope of the assessment, 
      I decided against it. */
  const [tableData, setTableData] = useState([]);
  const handleAddData = (newData) => {
    setTableData([...tableData,newData]);
  };
  const handleRemoveData = (index) => {
    const newData = [...tableData];
    newData.splice(index,1);
    setTableData(newData);
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <div className='col-lg-8 col-md-10 col-12'>
        <Form onAddData={handleAddData} data={tableData}/>
        <hr/>
        <Table data={tableData} onRemoveData={handleRemoveData}/>
      </div>
    </div>
  );
}

export default App;
