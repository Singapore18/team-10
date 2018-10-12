import React, { Component } from 'react';
import { Input, Popup, Button } from 'semantic-ui-react'
import Calendar from 'react-calendar';
import { NavLink } from 'react-router-dom';

import '../assets/css/theme.css';
import '../assets/css/form.css';

import {
    ALL_FORMS,
    API_SERVER_URL
} from '../../api';

export default class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            all_forms: [],
            
        }
    }

    getAllForms = async () => {
        await fetch(API_SERVER_URL + ALL_FORMS,{
            method: 'GET', 
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        })
        .then((response) => response.json())
        .then((responseJson)=>{
            if(!responseJson.error){
                this.setState({all_forms:responseJson});
            }
        })
        .catch((error) => {
        })
    }

    componentDidMount = async () => {
        this.getAllForms();
    }

    render() {
        return(
            <div class='form-wrapper'>
                <h1>Hello Coach Lee, here are your clients!</h1>
                {this.state.all_forms.map((value,index)=>{
                    return(
                        <div className="card">
                            <NavLink to={`/${value._id.$oid}`}>
                                <h1>
                                    {value.NRIC}
                                </h1>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        )
    }
}