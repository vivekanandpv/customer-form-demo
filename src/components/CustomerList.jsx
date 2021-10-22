import React from 'react';

const CustomerList = (props) => {
  return (
    <>
      <h4>Customer List</h4>
      <hr />
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Language</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {props.customers?.map((c) => {
            return (
              <tr key={c.email}>
                <td>{c.name}</td>
                <td>{c.city}</td>
                <td>{c.language}</td>
                <td>{c.email}</td>
                <td>{c.contact}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CustomerList;
