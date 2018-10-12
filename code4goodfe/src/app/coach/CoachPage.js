import React, { Component } from 'react';
import { Input, Popup, Button } from 'semantic-ui-react'
import Calendar from 'react-calendar';

import '../assets/css/theme.css';
import '../assets/css/coach.css';

import {
    API_SERVER_URL,
    EDIT_FORM
} from '../../api';

export default class CoachPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:{},
            NRIC: '',
            coach: '',
            full_name: '',
            personal_interests: '',
            work_strengths: '',

            work_experience:[{
                job_role:'',
                company: '',
                start_date: '',
                end_date: '',
            }],

            support: '',
            interested_industries:'',
            skills:'',

            request_location: '',
            request_area: '',
            request_time: '',
            request_duration: '',
            request_dow: '',
        }
    }


    componentDidMount = async () => {
    }

    getAnswersByOID = async () => {
        const oid = this.props.match.params.oid;
        await fetch(API_SERVER_URL + EDIT_FORM + oid,{
            method: 'GET', 
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        })
        .then((response) => response.json())
        .then((responseJson)=>{
            if(!responseJson.error){
                this.setState({
                    id:responseJson._id,
                    NRIC:responseJson.NRIC,
                    full_name:responseJson.full_name,
                    personal_interests:responseJson.personal_interests,
                    work_strengths:responseJson.work_strengths,
                    work_experience:responseJson.work_experience,
                    skills:responseJson.skills.join(','),
                    support:responseJson.support,
                    interested_industries:responseJson.interested_industries.join(','),
                    request_location:responseJson.request_location,
                    request_area:responseJson.request_area,
                    request_time:responseJson.request_time,
                    request_duration:responseJson.request_duration,
                    request_dow:responseJson.request_dow,
                });
            }
        })
        .catch((error) => {
        })
    }

    save = async () => {
        const oid = this.props.match.params.oid;
        let body = {
            NRIC: this.state.NRIC,
            coach: this.state.coach,
            full_name: this.state.full_name,
            personal_interests: this.state.personal_interests,
            work_strengths: this.state.work_strengths,

            work_experience:this.state.work_experience,
            support: this.state.support,
            interested_industries:this.state.interested_industries.split(','),
            skills: this.state.skills.split(','),

            request_location: this.state.request_location,
            request_area: this.state.request_area,
            request_time: this.state.request_time,
            request_duration: this.state.request_duration,
            request_dow: this.state.request_dow,
        }
        await fetch(API_SERVER_URL + EDIT_FORM + oid,{
            method: 'POST', 
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then((responseJson)=>{
            alert('save success');
        })
        .catch((error) => {
        })
    }

    render() {
        return(
            <div class='coach-wrapper'>
                <h1>Edit your response here:</h1>
                <div class='coach-questions'>
                    <div class="column">
                        <div class='card card-style'>
                            <h2>What is your NRIC? :</h2>
                            <Input fluid placeholder='{Type your answer here...}'
                                defaultValue={this.state.NRIC}
                            />
                            <br/>
                            <br/>
                        </div>
                    </div>
                        <div class="column">
                        <div class='card card-style'>
                            <h2>What is your full name?</h2>
                            <Input fluid placeholder='Type your answer here...'
                                defaultValue={this.state.full_name}
                            />
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div class='card card-style'>
                        <h2>What do you like to do in your freetime :D</h2>
                        <Input fluid placeholder='Type your answer here...'
                            defaultValue={this.state.personal_interests}
                        />
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>What are your strengths?</h2>
                        <Input fluid placeholder='Type your answer here...'
                            defaultValue={this.state.skills}
                        />
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>What have you worked as before</h2>
                        <Input fluid placeholder='Job Role'
                            defaultValue={this.state.work_experience[0].job_role}
                        />
                        <Input fluid placeholder='Company'
                            defaultValue={this.state.work_experience[0].company}
                        />
                        <Input fluid placeholder='Start Date'
                            defaultValue={this.state.work_experience[0].start_date}
                        />
                        <Input fluid placeholder='End date'
                            defaultValue={this.state.work_experience[0].end_date}
                        />
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>What skill do you have?</h2>
                        <Input fluid placeholder='Type your answer here...'
                            defaultValue={this.state.skills}
                        />
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>What kind of job do you like?</h2>
                        <Input fluid placeholder='Type your answer here...'
                            defaultValue={this.state.interested_industries}
                        />
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>Please support me by...</h2>
                        <Input fluid placeholder='Type your answer here...'
                            defaultValue={this.state.support}
                        />
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>I live near...</h2>
                        <Input fluid placeholder='Type your answer here...'
                            defaultValue={this.state.request_location}
                        />
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>I prefer working in...</h2>
                        <Input fluid placeholder='Type your answer here...'
                            defaultValue={this.state.request_area}
                        />
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>I can work from...</h2>
                        <Input fluid placeholder='Type your answer here...'
                            defaultValue={this.state.request_duration}
                        />
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>I can work...</h2>
                        <Input fluid placeholder='Type your answer here...'
                            defaultValue={this.state.request_time}
                        />
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>I can work on...</h2>
                        <Input fluid placeholder='Type your answer here...'
                            defaultValue={this.state.request_dow}
                        />
                        <br/>
                        <br/>
                    </div>
                    <button class='ui inverted button' onClick={()=>{this.save()}}>
                        <h4>Save</h4>
                    </button>
                    <button class='ui inverted button'>
                        <h4>Publish </h4>
                    </button>
                </div>
            </div>
        )
    }
}