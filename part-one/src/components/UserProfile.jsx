import React, { Component } from 'react';

export class UserProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: 'Alex',
        }
        this.changeName = this.changeName.bind(this);
    }

    changeName = () => {
        this.setState({name: 'Charlie'})
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

UserProfile.defaultProps = {
    initialName: 'Alex',
}

export default UserProfile;