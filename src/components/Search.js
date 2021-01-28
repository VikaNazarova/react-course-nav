import React from 'react';

function Search() {
  return (
    <form id="searchForm" method="post">
		<input id="searchField" name="searchField" type="text" placeholder="Name of the course" />
        <input type="submit" id="searchButton" value="Search" />
	</form>
  );
}

export default Search;