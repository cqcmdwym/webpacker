import React from 'react'
import ReactDOM from 'react-dom'

class Contact extends React.Component{
    render(){
        return (
            <div>Please feel free to contact us.</div>
        )
    }
}

ReactDOM.render(<Contact />, document.getElementById('react-container'));