import "./Sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">
      <button>
        <img src="src\assets\blacklogo.png" alt="gpt logo" className="logo"></img>
        <i className="fas fa-edit"></i>
      </button>

      <ul className="history">
        <li>thread1</li>
        <li>thread2</li>
        <li>thread3</li>
      </ul>
      <div className="sign">
        <span><p>By Apnacollege &hearts;</p></span>
        
    
     
      </div>
    </section>
  );
}
export default Sidebar;
