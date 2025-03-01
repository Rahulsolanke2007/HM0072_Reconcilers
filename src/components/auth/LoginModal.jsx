import { X } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, onSignupClick, error, loading, handleLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#002f34]">Login</h2>
          <button onClick={onClose}>
            <X size={24} className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        <form className="space-y-4" onSubmit={handleLogin}>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border-2 rounded p-2 outline-none focus:border-[#23e5db]"
              required
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border-2 rounded p-2 outline-none focus:border-[#23e5db]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#002f34] text-white py-2 rounded hover:bg-[#003f44] disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <button
            className="text-[#3a77ff] hover:underline font-semibold"
            onClick={onSignupClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 