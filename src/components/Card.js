import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import Badge from './Badge';

class Card extends React.Component {
    
    render() {

        let shortDesc = this.props.description.substr(0, 200) + "...";
        
        return (
            <div className="card">
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <img src={this.props.image} alt={this.props.title} />
                </a>
                <h3>{this.props.course_title}</h3>
                {/* <div>
                    <small>by {this.props.provider}</small>
                    <small>{(this.props.price === undefined) ? '' : '- '+this.props.price }</small>
                </div> */}
                <div>
                    {/* {this.props.department.map(item => <Badge text={item} /> )} */}
                </div>
                <p>{shortDesc}</p>
                <Button component={Link} text="See details" to={`course/${this.props.course_title}`} />
                {/* <Button component="a" text="Go to course" href={this.props.link} target="_blank" rel="noopener noreferrer" /> */}
            </div>
        );
    }
}

export default Card;