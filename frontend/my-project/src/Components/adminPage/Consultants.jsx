import React from "react";

function Consultants() {
  return (
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Consultant Management</h1>
          <div className="bg-white shadow rounded-lg overflow-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Specialization</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Jane Smith</td>
                  <td className="py-2 px-4">Corporate Law</td>
                  <td className="py-2 px-4">jane@example.com</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded">Approve</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded ml-2">Decline</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    };


export default Consultants;
