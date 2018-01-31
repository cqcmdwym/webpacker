import React from 'react'
import ReactDOM from 'react-dom'

class Display extends React.Component{
    render(){
        return (
            <div>Important Announcement</div>
        )
    }
}

ReactDOM.render(<Display />, document.getElementById('react-container'));