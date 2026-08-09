export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      <button
        onClick={handleLogout}
        className="bg-[#1877f2] text-white px-4 py-2 rounded-md"
      >
        Log out
      </button>
    </div>
  );
}