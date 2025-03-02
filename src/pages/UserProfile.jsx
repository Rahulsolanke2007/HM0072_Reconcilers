import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    mobileNo: '',
    address: '',
    college: '',
    prn: '',
    profileImage: '',
    createdAt: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [imageLoading, setImageLoading] = useState(false);
  const [likedItems, setLikedItems] = useState([]);

  // Fetch User Information
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Please login to view profile');
          setLoading(false);
          return;
        }

        const response = await fetch('https://campusbazzarbackend.onrender.com/api/user/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();
        if (response.ok) {
          setUserInfo(data.user);
        } else {
          setError(data.message || 'Failed to fetch user information');
        }
      } catch (err) {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  // Fetch Liked Items from localStorage
  useEffect(() => {
    const storedLikedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
    setLikedItems(storedLikedItems);
  }, []);

  // Handle Profile Image Upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('profileImage', file);

    setImageLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://campusbazzarbackend.onrender.com/api/user/profileImage', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await response.json();
      if (response.ok) {
        setUserInfo(prev => ({ ...prev, profileImage: data.profileImage }));
      } else {
        setError(data.message || 'Failed to update profile image');
      }
    } catch (err) {
      setError('Failed to upload image. Please try again.');
    } finally {
      setImageLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-[#002f34] to-[#065a62] px-8 py-10 text-white">
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <div className="h-24 w-24 rounded-full bg-gray-300 border-4 border-white overflow-hidden">
                  {imageLoading ? (
                    <div className="h-full w-full flex items-center justify-center bg-gray-200">
                      <span className="text-sm text-gray-600">Loading...</span>
                    </div>
                  ) : userInfo.profileImage ? (
                    <img 
                      src={userInfo.profileImage} 
                      alt={userInfo.name} 
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-200">
                      <span className="text-3xl text-gray-600">
                        {userInfo.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </label>
              </div>
              <div>
                <h1 className="text-3xl font-bold">{userInfo.name}</h1>
                <p className="text-gray-200 mt-1">{userInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-sm font-semibold text-gray-600">Mobile Number</h2>
                  <p className="text-lg mt-1">{userInfo.mobileNo}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-sm font-semibold text-gray-600">College</h2>
                  <p className="text-lg mt-1">{userInfo.college}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-sm font-semibold text-gray-600">Address</h2>
                  <p className="text-lg mt-1">{userInfo.address}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-sm font-semibold text-gray-600">Member Since</h2>
                  <p className="text-lg mt-1">
                    {new Date(userInfo.createdAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Liked Items Section */}
          <div className="px-8 py-6">
            <h2 className="text-xl font-bold">Liked Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {likedItems.length > 0 ? (
                likedItems.map(item => (
                  <div key={item._id} className="border rounded-lg p-4 shadow-md">
                    <img src={item.images[0]} alt={item.title} className="w-full h-32 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">₹ {item.price}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No liked items yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
