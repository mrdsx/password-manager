import "./sidebar.modules.css";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="categories">
        <button>All items</button>
        <button>Favorites</button>
        <button>Trash</button>
      </div>
      <div className="types">
        <button className="dropdown-btn">Types</button>
        <button>Login</button>
        <button>Card</button>
        <button>Identity</button>
        <button>Secure note</button>
        {/* <button>SHH key</button> */}
      </div>
      <div className="folders">
        <button className="dropdown-btn">Folders</button>
        <button>No folder</button>
      </div>
    </div>
  );
}