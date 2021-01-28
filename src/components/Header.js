import React from 'react';
import Search from './Search';

function Header() {
  return (
    <header>
		<div>
			<nav>
				<a href="/">Course Navigator</a>
				<a href="/categories">Categories</a>
				<a href="/top-courses">Top courses</a>
			</nav>
			<Search />
		</div>
	</header>
  );
}

export default Header;