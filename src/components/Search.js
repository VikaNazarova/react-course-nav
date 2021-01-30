import React from 'react';
// import Card from './Card';
import Button from './Button';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: {}, isFetching: true, error: null };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    let searchQuery = e.target.searchField.value;

    fetch('https://gist.githubusercontent.com/VikaNazarova/18108021850f79e70fbdc46a62056293/raw/2f05dceca54ea0332417525fba6a700b49434c27/gistfile1.txt')
    .then(response => response.json())
    .then(courses => 
      this.setState({ 
        result: courses.filter(course => course.course_title.toLowerCase().includes(searchQuery.toLowerCase())), 
        isFetching: false 
      }))
    .catch(err => console.log(err));
  }

  render() {
    const { result, isFetching, error } = this.state;
    let searchResults = null;
    if (!isFetching) {
      document.querySelector('#searchResults').style.display = 'block';
      searchResults = <div>
        { result.map(course => (
          <div>
            <h5>{course.course_title} </h5>
            <Button component={Link} text="See details" to={`course/${course.course_title}`} />
          </div>
        ))}
      </div>
    }
    
    if (error) return <div>{`Error: ${error.message}`}</div>;
    // console.log(this.state.result);

    return (
      <div style={{position: "relative"}}>
        <form id="searchForm" method="post" onSubmit={(e) => this.submitHandler(e)}>
          <input id="searchField" name="searchField" type="text" placeholder="Name of the course" />
          <input type="submit" id="searchButton" value="Search" />
        </form>

        <div id="searchResults">
          {searchResults}
        </div>
      </div>
    );
  }
}

export default Search;