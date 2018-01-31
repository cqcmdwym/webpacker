import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class Image extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.caption}</p>
                <div id="image"></div>
            </div>
        );
    }
}
const MyComponent = () => <h1>Webpack &amp; React</h1>

ReactDOM.render(<Image title="Desolation Wilderness" caption="Wilderness are in Lake?"/>, document.getElementById('react-container'))