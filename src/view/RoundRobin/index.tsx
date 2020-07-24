import React from 'react';

export const RoundRodin: React.FC = () => {
  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-head">
        <header className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a href="/home" className="navbar-item">
                <img
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHeroC"
              />
            </div>
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                <a href="/home" className="navbar-item">
                  Home
                </a>

                <span className="navbar-item">
                  <a href="/" className="button is-info is-inverted">
                    <span>Repo</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Round Robin Simulator</h1>
          <h2 className="subtitle">Here!</h2>
        </div>
      </div>
    </section>
  );
};
