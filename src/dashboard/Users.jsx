import React, { useEffect, useState } from 'react'
import DashSidebar from '../layout/DashSidebar'
import supabase from '../config/connectdb';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('users').select();
      if (error) {
        console.log(error);
      } else {
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className='d-flex'>
      <DashSidebar />
      <div className='users'>
        <div className='d-flex align-items-center justify-content-center flex-column'>
         
          <div className="container">
            <div className='row d-flex justify-content-center'>
              <div className="col-lg-10">
              <h4 className='text-center my-5'>Users</h4>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Surname</th>
                      <th scope="col">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users.map((item, index) => (
                        <tr >
                          <th scope='row'>{index + 1}</th>
                          <td>{item.name}</td>
                          <td>{item.surname}</td>
                          <td>{item.email}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Users