import React from 'react';
// import {ReactTable} from "react-table";
import Axios from 'axios';
const api_url = "https://gorest.co.in/public-api/";
const authBearer = "Bearer 133acc5970437f9b6f89cd03b05cddfec5c719201c3614d682b24b7dcb6c9a19";

export default class Categories extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : [],
            columns : [],
            message : 'Loading...',
            formdata : {
                name : '',
                description : ''
            },
            editid : 0,
            addupdatebtnname : 'ADD'
        };

        this.fillDataFromAPI = this.fillDataFromAPI.bind(this);
        this.renderTableData = this.renderTableData.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.editCategory = this.editCategory.bind(this);
        this.cancelCategory = this.cancelCategory.bind(this);

        this.fillDataFromAPI();
    };

    fillDataFromAPI(){
        var classState = this;
        Axios.get(api_url+"categories")
        .then(function(res){
            debugger;
            if(res.status===200){
                classState.setState({data : res.data.data});
            }
        })
        .catch(function(res){
            console.log(res);
        });
    }

    deleteCategory(e){
        debugger;
        const classState = this;
        const delteId = e.target.getAttribute("deleteid");
        Axios.delete(api_url+"categories/"+delteId,{
            headers: {
                'Authorization': authBearer
            }
        })
        .then(function(res){
            debugger;
            if(res.data.code===204){
                alert("Deleted Successfully.");
                classState.fillDataFromAPI();            
            }else{
                alert(res.data.data.message);
            }
        })
        .catch(function(res){
            debugger;
            console.log(res);
        });
    };

    renderTableData(){
        let data = (<tr>
                        <td>Loading...</td>
                    </tr>);
        if(this.state.data.length > 0){
            data = "";
        }            
        data = this.state.data.map((cat, index) => {
            const { id, name, description, status} = cat //destructuring
            return (
               <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>{status ? "Active" : "Deactive"}</td>
                  <td className="categoty-action-link">
                      <span deleteid={id} onClick={this.deleteCategory}>DELETE</span>
                      &nbsp;&nbsp;-&nbsp;&nbsp;
                      <span 
                      name={name}
                      des={description}
                      editid={id}
                      onClick={this.editCategory}>
                          EDIT
                        </span>
                    </td>
               </tr>
            )
         });

        return data;
    }

    addCategory(){
        debugger;
        const classState = this;
        let call = null;
        if(classState.state.editid){
            call = Axios.put(api_url+"categories/"+classState.state.editid,{
                "name": classState.state.formdata.name,
                "description": classState.state.formdata.description,
                "status" : true
            },{
                headers: {
                    'Authorization': authBearer
                }
            });
        }else{
            call = Axios.post(api_url+"categories",{
                "name": classState.state.formdata.name,
                "description": classState.state.formdata.description,
                "status" : true
            },{
                headers: {
                    'Authorization': authBearer
                }
            });
        }

        if(call){
            call.then(function(res){
                debugger;
                if(res.data.code === 201){
                    classState.fillDataFromAPI();
                    alert("'"+res.data.data.name+"' Category Added Successfully.");
                }else if(res.data.code === 422){
                    alert(res.data.data[0].field+" "+res.data.data[0].message);
                }else if (res.data.code===200){
                    classState.fillDataFromAPI();
                    classState.cancelCategory();
                    alert("Updated Successfully.");
                }
            }).catch(function(res){
                debugger;
                console.log(res);
            });
        }
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        let oldval = this.state.formdata;
        oldval[name] = value;
        this.setState({formdata : oldval});
    }

    editCategory(e){
        debugger;
        const name = e.target.getAttribute("name");
        const desc = e.target.getAttribute("des");
        const editId = e.target.getAttribute("editid");
        this.setState({editid : editId});
        this.setState({formdata : {
            name : name,
            description : desc
        }});
        this.setState({addupdatebtnname : 'UPDATE'});
    }

    cancelCategory(e){
        this.setState({editid : 0});
        this.setState({formdata : {
            name : '',
            description : ''
        }});
        this.setState({addupdatebtnname : 'ADD'});
    }

    render(){
        
        const tableHeader = (<tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
            <th>ACTION</th>
        </tr>);
        
        
          
        return(
            <div>
                <h1 onClick={this.test}>Categories</h1>
                <form>
                    <input 
                    value={this.state.formdata.name}
                    type="tetx" placeholder="Category Name"
                    name="name" onChange={this.handleChange} />
                    &nbsp;
                    <input 
                    value={this.state.formdata.description}
                    style={{width: '700px'}} type="tetx" placeholder="Category Description" 
                    name="description" onChange={this.handleChange} />
                    &nbsp;
                    <span onClick={this.addCategory} className="categoty-action-link">{this.state.addupdatebtnname}</span>
                    &nbsp; - &nbsp;
                    <span onClick={this.cancelCategory} className="categoty-action-link">CANCEL</span>
                </form>
                <br/>
                <table border="1" id='cat'>
                    <tbody>
                        {tableHeader}
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    };
    
}

// export default Categories;