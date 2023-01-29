import React from 'react';

const Table = () => {
   return (
      <div className='mt-20'>
         <div className='w-fit lg:w-10/12 px-5 mx-auto flex flex-col md:flex-row gap-4 justify-between border border-cyan-600 py-2 rounded mb-4'>
            <div className=' flex gap-3'>
               <p>Billings</p>
               <div><input type="text" placeholder="Type here" className="input input-xs input-bordered input-info w-full max-w-xs" /></div>
            </div>
            <div><label htmlFor="my-modal-3" className="btn btn-sm btn-info text-white">Add New Bill</label></div>
            {/* The button to open modal */}
         </div>
         <div className="overflow-x-auto">
            <table className="table table-compact w-fit lg:w-10/12 px-5 mx-auto">
               <thead>
                  <tr>
                     <th>Billing ID</th>
                     <th>Full Name</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>Paid Amount</th>
                     <th>Access</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Hart Hagerty</td>
                     <td>Desktop Support Technician</td>
                     <td>Zemlak, Daniel and Leannon</td>
                     <td>United States</td>
                     <td>12/5/2020</td>
                     <td>Edit | Delete</td>
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

         {/* Put this part before </body> tag */}
         <input type="checkbox" id="my-modal-3" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box relative">
               <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
               <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            </div>
         </div>
      </div>
   );
};

export default Table;