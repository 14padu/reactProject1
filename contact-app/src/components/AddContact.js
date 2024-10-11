import React from "react";
import React from "react";

class AddContact extends React.components{
    render() {
        return (
<div className="ui main">
    <h2>Add Contact</h2>
    <from className="ui form ">
        <div className="field">
            <label>Name</label> 
            <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="field">
            <label>Name</label> 
            <input type="text" name="email" placeholder="email" />
            </div>
            
            </from>
        </div>
        );
    }
}

