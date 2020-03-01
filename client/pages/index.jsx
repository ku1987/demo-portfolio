import React from 'react';
import Link from 'next/link';
import Header from '../components/header';
import Navbar from '../components/navbar';

const Index = () => (
  <div>
    <Navbar />
    <main>
      <Header />
      <div>
        <h1>Hello</h1>
        <Link href="/about"><a>About</a></Link>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ex laboriosam excepturi aspernatur natus asperiores voluptatibus sunt dicta laborum porro, deserunt animi ullam illum aut, reiciendis culpa ab nihil, error suscipit maxime qui iure! Harum laborum veniam cupiditate, earum vel non architecto libero incidunt voluptatem magni sit, tenetur enim totam ullam ea quaerat natus! Perspiciatis architecto deserunt nisi officia, recusandae velit repellat minima repudiandae voluptatibus dolores neque aspernatur ullam iusto dolorem molestiae voluptate, incidunt possimus temporibus nulla veniam doloribus provident ipsum? Non quos consectetur laudantium. Accusantium enim exercitationem reiciendis facilis alias sequi quos, modi impedit magnam, facere ullam eius sed!
          </p>
      </div>
    </main>
  </div>
);

export default Index;
