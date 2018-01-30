import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class Message extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
}
const MyComponent = () => <h1>Webpack &amp; React</h1>

ReactDOM.render(<Message title="Email Alex" message="Can I email him?"/>, document.getElementById('react-container'))