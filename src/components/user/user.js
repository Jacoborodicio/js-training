import React from 'react';

const User = props => {
    const {age, name} = props;
    return (<div>User: {name}  Age: {age} CONTENT__: {props.children}</div>)
}

export default User;