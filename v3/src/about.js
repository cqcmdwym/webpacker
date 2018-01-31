import React from 'react'
import ReactDOM from 'react-dom'

class About extends React.Component{
    render(){
        return (
            <div>This is some info about our company</div>
        )
    }
}

ReactDOM.render(<About />, document.getElementById('react-container'));