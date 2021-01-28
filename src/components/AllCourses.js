import React from 'react';
import Card from './Card';

class AllCourses extends React.Component {

    state = { data: {}, isFetching: true, error: null };


    componentDidMount() {
        fetch('https://gist.githubusercontent.com/VikaNazarova/18108021850f79e70fbdc46a62056293/raw/2f05dceca54ea0332417525fba6a700b49434c27/gistfile1.txt')
            .then(response => response.json())
            .then(response => this.setState({data: response, isFetching: false }))
            .catch(error => {
              this.setState({data: this.response, isFetching: false, error: error })
            });
    }

    render() {
        let { data, isFetching, error } = this.state;
        
        if (isFetching) return <div>...Loading</div>;

        if (error) return <div>{`Error: ${error.message}`}</div>;

        // DELETE: this cut is only for dev
        data = data.slice(0, 6);

        return (
            <>
            <h1>All courses</h1>
                <div className="card-deck">
                    { data.map(course => (
                        <Card {...course} />
                    ))}
                </div>
            </>
        );
    }
}

export default AllCourses;