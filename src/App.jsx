import React, { useState } from 'react';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';

const App = () => {
  const [customers, setCustomers] = useState([]);

  const addCustomer = (c) => {
    const newCustomers = [...customers, c];
    setCustomers(newCustomers);
  };

  return (
    <>
      <div className='container p-5'>
        <div className='row'>
          <div className='col-lg-6 col-12'>
            <CustomerList customers={customers} />
          </div>
          <div className='col-lg-6 col-12'>
            <CustomerForm add={addCustomer} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
