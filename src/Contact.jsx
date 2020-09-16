import React from 'react';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e){
        alert(e.target.value);
    };

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return (
            
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tr>
                        <td>First Name : </td>
                        <td><input type="text" name="firstName" onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                        <td>
                            Last Name : 
                        </td>
                        <td>
                            <input type="text" name="lastName" onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>Mobile : </td>
                        <td>
                            <input type="text" name="mobile" onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        
                        </td>
                        <td>
                            <input type="submit" />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="reset" />
                        </td>
                    </tr>
                </table>
            </form>
            
        );
    };
}

// function Contact() {
    
    
    
// }

export default Contact;