import React, { Component } from 'react';
import { Input, Popup, Button } from 'semantic-ui-react'
import Calendar from 'react-calendar';

import '../assets/css/theme.css';
import '../assets/css/hire.css';

export default class CoachPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            company_name: '',
            work_location:'',
            job_title: '',
            job_description:'',
            contact_person:'',
            contact_number:'',
            email_address:'',
            remarks:''
        }
    }

    componentDidMount = async () => {
    }

    clear(){
        this.state={
            company_name: '',
            work_location:'',
            job_title: '',
            job_description:'',
            contact_person:'',
            contact_number:'',
            email_address:'',
            remarks:''
        }
    }

    onSubmit() {
        // api call
        fetch('/offer', {
            method: 'post',
            body: {
                company_name: this.state.company_name,
                work_location: this.state.work_location,
                job_title: this.state.job_title,
                job_description: this.state.job_description,
                contact_person:this.contact_person,
                contact_number: this.state.contact_number,
                email_address: this.state.email_address,
                remarks: this.state.remarks
            }
        })
        .then((res) => this.props.history.push('/home'))
        .catch((error) => console.log(error))
    }
    render() {
        return(
            <div class='hire-wrapper'>
                <h1>Edit your response here:</h1>
                <div class='hire-questions'>
                    <div class="column"></div>
                        <b>Date: {(new Date).toDateString()} </b>
                        <br />
                        <b>Company Name: </b>
                        <Input fluid placeholder='' onChange={(event)=>{this.setState({company_name:event.target.value},()=>{this.submit();})}}/><br/>
                        <b>Work Location: </b>
                        <Input fluid placeholder='' onChange={(event)=>{this.setState({work_location:event.target.value},()=>{this.submit();})}}/><br/>
                        <b>Job Title: </b>
                        <Input fluid placeholder='' onChange={(event)=>{this.setState({job_title:event.target.value},()=>{this.submit();})}}/><br/>
                        <b>Job Description and Requirements: </b>
                        <Input fluid placeholder='' onChange={(event)=>{this.setState({job_description:event.target.value},()=>{this.submit();})}}/><br/>
                        <b>Contact Person: </b>
                        <Input fluid placeholder='' onChange={(event)=>{this.setState({contact_person:event.target.value},()=>{this.submit();})}}/><br/>
                        <b>Contact Number: </b>
                        <Input fluid placeholder='' onChange={(event)=>{this.setState({contact_number:event.target.value},()=>{this.submit();})}}/><br/>
                        <b>Email Address: </b>
                        <Input fluid placeholder='' onChange={(event)=>{this.setState({email_address:event.target.value},()=>{this.submit();})}}/><br/>
                        <b>Remarks: </b>
                        <Input fluid placeholder='' onChange={(event)=>{this.setState({remarks:event.target.value},()=>{this.submit();})}}/><br/>
                    </div>

                    <button class='ui inverted button' onClick={()=>{this.onSubmit()}}>
                        <h4>Submit</h4>
                    </button>
                    <button class='ui inverted button' onClick={()=>{this.clear()}}>
                        <h4>Cancel</h4>
                    </button>
                </div>
        )
    }
}
