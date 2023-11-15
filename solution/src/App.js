import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [tableData, setTableData] = useState([]);
  const handleAddData = (newData) => {
    setTableData([...tableData,newData]);
  };

  return (
    <div className="">
      <Form onAddData={handleAddData} data={tableData}/>
      <Table data={tableData}/>
    </div>
  );
}

export default App;
