import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        {/* ... other routes ... */}
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
} 