import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <header className="jumbotron mt-4">
        <h1 className="display-4">Welcome to Keeper 2.0</h1>
        <p className="lead">The world's best notes app. Probably</p>
        <hr className="my-4"/>
        <p>Join us today and make your note dreams come true.</p>
        <Link to="/notes" className="btn btn-primary btn-lg" role="button">Write meow</Link>
      </header>

      <section className="my-5">
        <h2>About Keeper</h2>
        <p>Take Notes in a secure environment
        </p>
      </section>
    </div>
  );
}

export default HomePage;
