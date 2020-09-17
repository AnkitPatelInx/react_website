import React, { Component } from 'react';
import {ReactTable} from "react-table";

import Axios from 'axios';
const api_url = "https://gorest.co.in/public-api/";

export default class Categories extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : [],
            columns : []
        };

        this.fillDataFromAPI = this.fillDataFromAPI.bind(this);
        this.renderTableData = this.renderTableData.bind(this);

        this.fillDataFromAPI();
    };

    fillDataFromAPI(){
        var classState = this;
        Axios.get(api_url+"categories")
        .then(function(res){
            debugger;
            if(res.status==200){
                classState.setState({data : res.data.data});
            }
        })
        .catch(function(res){
            console.log(res);
        });
    }

    // function test(){
    //     console.log("TEST");
    // }

    // function deleteCategory(e){
    //     Axios.delete(api_url+"categories/6",{
    //         headers: {
    //             'Authorization': 'Bearer 133acc5970437f9b6f89cd03b05cddfec5c719201c3614d682b24b7dcb6c9a19'
    //         }
    //     })
    //     .then(function(res){
    //         console.log(res);
    //     })
    //     .catch(function(res){
    //         console.log(res);
    //     });
    // };


    renderTableData(){
        const data = this.state.data.map((cat, index) => {
            const { id, name, description, status} = cat //destructuring
            return (
               <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>{status ? "Active" : "Deactive"}</td>
               </tr>
            )
         });

        return data;
    }
        

    render(){
        const data = [{
            age: 26,
            visits: 100
          },{
            age: 44,
            visits: 200
          }]
        return(
            <div>
                <h1 onClick={this.test}>Categories</h1>
                
                <table border="1" id='cat'>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th>STATUS</th>
                        </tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    };
    
}

// export default Categories;