import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';

type ContactForm = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
};

type JobApplication = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  created_at: string;
};

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<'contacts' | 'applications'>('contacts');
  const [contacts, setContacts] = useState<ContactForm[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [interestedIds, setInterestedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contactsResponse, applicationsResponse] = await Promise.all([
          supabase
            .from('contact_forms')
            .select('*')
            .order('created_at', { ascending: false }),
          supabase
            .from('job_applications')
            .select('*')
            .order('created_at', { ascending: false })
        ]);

        if (contactsResponse.error) throw contactsResponse.error;
        if (applicationsResponse.error) throw applicationsResponse.error;

        setContacts(contactsResponse.data);
        setApplications(applicationsResponse.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleInterested = (id: string) => {
    setInterestedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const deleteRecord = async (
    id: string,
    type: 'contact_forms' | 'job_applications'
  ) => {
    const confirmed = window.confirm('Are you sure you want to delete this record?');
    if (!confirmed) return;

    try {
      const { error } = await supabase
        .from(type)
        .delete()
        .eq('id', id);

      if (error) throw error;

      if (type === 'contact_forms') {
        setContacts(contacts.filter(contact => contact.id !== id));
      } else {
        setApplications(applications.filter(application => application.id !== id));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete record');
    }
  };

  // Format date as DD/MM/YYYY
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  return (
    <div className="min-h-screen">
      <nav className="bg-blue-500 text-black px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-black text-white rounded hover:bg-red-700 transition-colors"
          >
          Sign Out
          </button>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex flex-wrap">
              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-6 py-4 text-lg font-bold w-full sm:w-auto ${
                  activeTab === 'contacts'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                Contact Forms ({contacts.length})
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-6 py-4 text-lg font-bold w-full sm:w-auto ${
                  activeTab === 'applications'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                Job Applications ({applications.length})
              </button>
            </nav>
          </div>

          {loading ? (
            <div className="p-8 text-center text-gray-500">Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              {activeTab === 'contacts' ? (
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div key={contact.id} className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start">
                      <div className="text-sm text-gray-900 mb-4 sm:mb-0">
                        <h3 className="font-bold text-lg">{contact.full_name}</h3>
                        <p><strong>Email:</strong> {contact.email}</p>
                        <p><strong>Phone No:</strong> {contact.phone}</p>
                        <p><strong>Message:</strong> {contact.message}</p>
                        <p><strong>Date:</strong> {formatDate(contact.created_at)}</p>
                      </div>

                      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                        <button
                          onClick={() => handleInterested(contact.id)}
                          className={`text-white px-4 py-2 rounded-md ${interestedIds.has(contact.id) ? 'bg-green-600' : 'bg-gray-500'} hover:bg-green-700`}
                        >
                          {interestedIds.has(contact.id) ? 'Interested' : 'Mark as Interested'}
                        </button>

                        <button
                          onClick={() => deleteRecord(contact.id, 'contact_forms')}
                          className="text-white bg-red-600 hover:bg-red-700 rounded-md px-3 py-2"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {applications.map((application) => (
                    <div key={application.id} className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start">
                      <div className="text-sm text-gray-900 mb-4 sm:mb-0">
                        <h3 className="font-bold text-lg">{application.full_name}</h3>
                        <p><strong>Position:</strong> {application.position}</p>
                        <p><strong>Email:</strong> {application.email}</p>
                        <p><strong>Phone No:</strong> {application.phone}</p>
                        
                        <p><strong>Date:</strong> {formatDate(application.created_at)}</p>
                      </div>

                      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                        <button
                          onClick={() => handleInterested(application.id)}
                          className={`text-white px-4 py-2 rounded-md ${interestedIds.has(application.id) ? 'bg-green-600' : 'bg-gray-500'} hover:bg-green-700`}
                        >
                          {interestedIds.has(application.id) ? 'Interested' : 'Mark as Interested'}
                        </button>

                        <button
                          onClick={() => deleteRecord(application.id, 'job_applications')}
                          className="text-white bg-red-600 hover:bg-red-700 rounded-md px-3 py-2"
                        >
                        Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
