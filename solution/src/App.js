import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
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
