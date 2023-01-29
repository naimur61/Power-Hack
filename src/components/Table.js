import React from 'react';

const Table = () => {
   return (
      <div>
         <div className='w-fit lg:w-10/12 px-5 mx-auto'>
            <div>
               <p>Billings</p>
               <div><input type="text" placeholder="Type here" className="input input-xs input-bordered input-info w-full max-w-xs" /></div></div>
            <div><button></button>
               <button className="btn btn-sm btn-info text-white">Add New</button></div>
         </div>
         <div className="overflow-x-auto">
            <table className="table table-compact w-fit lg:w-10/12 px-5 mx-auto">
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Job</th>
                     <th>company</th>
                     <th>location</th>
                     <th>Last Login</th>
                     <th>Favorite Color</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Hart Hagerty</td>
                     <td>Desktop Support Technician</td>
                     <td>Zemlak, Daniel and Leannon</td>
                     <td>United States</td>
                     <td>12/5/2020</td>
                     <td>Purple</td>
                  </tr>
                  <tr>
                     <td>Sammy Seston</td>
                     <td>Accountant I</td>
                     <td>O'Hara, Welch and Keebler</td>
                     <td>Indonesia</td>
                     <td>5/23/2020</td>
                     <td>Crimson</td>
                  </tr>
                  <tr>
                     <td>Lesya Tinham</td>
                     <td>Safety Technician IV</td>
                     <td>Turner-Kuhlman</td>
                     <td>Philippines</td>
                     <td>2/21/2021</td>
                     <td>Maroon</td>
                  </tr>
                  <tr>
                     <td>Zaneta Tewkesbury</td>
                     <td>VP Marketing</td>
                     <td>Sauer LLC</td>
                     <td>Chad</td>
                     <td>6/23/2020</td>
                     <td>Green</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Table;