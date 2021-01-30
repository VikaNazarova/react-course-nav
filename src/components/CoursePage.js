import React from 'react';
import Button from './Button';
import Badge from './Badge';

class CoursePage extends React.Component {

    state = { course: {}, isFetching: true, error: null };

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/VikaNazarova/18108021850f79e70fbdc46a62056293/raw/2f05dceca54ea0332417525fba6a700b49434c27/gistfile1.txt')
            .then(response => response.json())
            .then(response => this.setState({
                course: response.find(
                    item => item.course_title === this.props.match.params.title
                ), 
                isFetching: false 
            }))
            .catch(error => {
              this.setState({course: this.response, isFetching: false, error: error })
            });
    }
    
    render() {
        const { course, isFetching, error } = this.state;
        if (isFetching) return <div>...Loading</div>;
        if (error) return <div>{`Error: ${error.message}`}</div>;

        return (
            <>
                <h1>{course.course_title}</h1>
                <div className="course-page">
                    <div className="top-info">
                        <img src={course.image} alt={course.course_title} />
                        <div className="stats">
                            <ul>
                                <li><b>Price:</b> {course.price}</li>
                                <li><b>Provider:</b> {course.provider}</li>
                                <li><b>Languages:</b> {course.languages.map(language => language + ' ')}</li>
                                <li><b>Partners:</b> {course.partners.map(partner => partner + ' ')}</li>
                            </ul>
                            <ul>
                                {course.department.map(item => <li><Badge text={item} /></li>)}
                            </ul>
                        </div>    
                    </div>
                    <div>
                        <p>{course.description}</p>
                        <Button component="a" text="Go to course" href={course.link} target="_blank" />
                    </div>
                </div>
            </>
        );
    }
}

export default CoursePage;