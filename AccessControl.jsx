import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const mockAccessList = [
  {
    id: 1,
    name: 'Dr. Aritra Ghosh',
    role: 'Cardiologist',
    accessLevel: 'Full',
    lastAccessed: '2025-07-08 10:30 AM'
  },
  {
    id: 2,
    name: 'Dr. Sneha Roy',
    role: 'Endocrinologist',
    accessLevel: 'Limited',
    lastAccessed: '2025-07-07 02:10 PM'
  },
  {
    id: 3,
    name: 'Dr. Sarah Lee',
    role: 'Neurologist',
    accessLevel: 'Read-only',
    lastAccessed: '2025-07-06 04:45 PM'
  }
];

const AccessControl = () => {
  const [accessList, setAccessList] = useState(mockAccessList);

  const revokeAccess = (id) => {
    const confirmed = window.confirm("Are you sure you want to revoke access?");
    if (confirmed) {
      setAccessList(prev => prev.filter(entry => entry.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Access Control</h2>

        <div className="overflow-x-auto bg-white shadow-md rounded-xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Access Level</th>
                <th className="px-6 py-3">Last Accessed</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {accessList.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-400">No access records available.</td>
                </tr>
              ) : (
                accessList.map(entry => (
                  <tr key={entry.id} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium">{entry.name}</td>
                    <td className="px-6 py-4">{entry.role}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        entry.accessLevel === 'Full' ? 'bg-green-100 text-green-700' :
                        entry.accessLevel === 'Limited' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {entry.accessLevel}
                      </span>
                    </td>
                    <td className="px-6 py-4">{entry.lastAccessed}</td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        className="text-blue-600 hover:underline text-sm"
                        onClick={() => alert("Edit access not implemented")}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:underline text-sm"
                        onClick={() => revokeAccess(entry.id)}
                      >
                        Revoke
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccessControl;
