const Header = ({ data, handleLogout }) => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-light">
        Hello <br />
        <span className="text-3xl font-bold">
          {!data ? 'Admin' : data.name}
        </span>
      </h1>
      <button 
        onClick={handleLogout} 
        className="text-sm flex justify-center items-center text-zinc-300 bg-red-950/35 hover:bg-red-950 py-1 px-2 rounded font-semibold"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
