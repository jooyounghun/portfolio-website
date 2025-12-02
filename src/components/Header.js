import './Header.css';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Joo Young Hyuk</h1>
        <nav className="nav">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
