import React, { Component } from 'react';
import { Input, Popup, Button } from 'semantic-ui-react'
import Calendar from 'react-calendar';
import { Redirect } from 'react-router-dom';

import '../assets/css/theme.css';
import '../assets/css/form.css';

import {
    FORM,
    API_SERVER_URL
} from '../../api';

export default class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            isDone: false,
            currentQuestion: 0,
            questions: [
                {question:'What is your NRIC? :)', key: 'NRIC'},
                {question:'What is your coach NRIC? :)', key: 'coach'},
                {question:'What is your full name?', key: 'full_name'},
                {question:'What do you like to do in your freetime :D', key: 'personal_interests'},
                {question:'What are your strengths?', key: 'work_strengths'},
                {question:'What have you worked as before?', key: ''},
                {question:'What skills do you have?', key: 'skills'},
                {question: 'What kind of job do you like?', key:'interested_industries'},
                {question: 'Please support me by...', key:'support'},
                {question: 'I live near...', key:'request_location'},
                {question: 'I prefer working in...', key:'request_area'},
                {question: 'I can work from...', key:'request_duration'},
                {question: 'I can work...', key:'request_time'},
                {question: 'I can work on...', key:'request_dow'},
            ],

            // For sending back json
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

    next = (i) => {
        console.log(i);
        console.log(this.state.questions.length)
        if(i<this.state.questions.length-1){
            this.setState({currentQuestion:this.state.currentQuestion+1})
        }
        
    }

    back = (i) => {
        console.log(i);
        console.log(this.state.questions.length)
        if(i>0){
            this.setState({currentQuestion:this.state.currentQuestion-1})
        }
        
    }

    submit = async () => {
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

        await fetch(API_SERVER_URL + FORM,{
            method: 'POST', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
          })
        .then((response) => response.json())
        .then((responseJson)=>{
            alert(responseJson.message);
            return(<Redirect to="/"/>)
        })
        .catch((error) => {
            
        })
    }

    componentDidMount = async () => {
    }

    render() {
        return(
            <div class='form-wrapper'>
                <h1>Let us know more about you!</h1>
                <div class='form-questions'>
                    {this.state.questions.map( (value, index)=>{
                        return(
                            index===this.state.currentQuestion?(
                                index===4?(
                                    <div className='card card-style' key={value.key}>
                                        <h2>{value.question}</h2>
                                        {this.state.work_experience.map((currentWork, i) =>{
                                            return(
                                                <div className="experience">
                                                    <div className="toppart">
                                                        <h4>Job Role</h4>
                                                        <Input fluid placeholder='Type your answer here...'/>
                                                        <h4>Company</h4>
                                                        <Input fluid placeholder='Type your answer here...'/>
                                                    </div>
                                                    
                                                    <h4>Period</h4>
                                                    From {this.state.work_experience[i].start_date!==""?(this.state.work_experience[i].start_date.toDateString()):(this.state.work_experience[i].start_date)}
                                                    <Popup
                                                        wide='very'
                                                        hoverable
                                                        trigger={<Button icon='calendar alternate' color='violet'/>}
                                                    >
                                                        <Calendar
                                                            onChange={(date)=>{
                                                                let work = this.state.work_experience;
                                                                work[i].start_date = date;
                                                                this.setState({work_experience: work})
                                                            }}
                                                            value={this.state.work_experience[i].start_date}
                                                        />
                                                    </Popup>
                                                    To {this.state.work_experience[i].end_date!==""?(this.state.work_experience[i].end_date.toDateString()):(this.state.work_experience[i].end_date)}
                                                    <Popup
                                                        wide='very'
                                                        hoverable
                                                        trigger={<Button icon='calendar alternate' color='violet'/>}
                                                    >
                                                        <Calendar
                                                            onChange={(date)=>{
                                                                let work = this.state.work_experience;
                                                                work[i].end_date = date;
                                                                this.setState({work_experience: work})
                                                            }}
                                                            value={this.state.work_experience[i].end_date}
                                                        />
                                                    </Popup>
                                                </div>
                                            )
                                            
                                        })}

                                        <Button icon='add' onClick={()=>{
                                            const new_experience = {
                                                job_role:'',
                                                company: '',
                                                start_date: '',
                                                end_date: '',
                                            };
                                            let work_experience = this.state.work_experience;
                                                work_experience.push(new_experience);
                                                this.setState({work_experience:work_experience});
                                        }}/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <button className='button-call-to-actions' onClick={()=>{this.back(index);}}>
                                            <h4>Previous</h4>
                                        </button>
                                        <span style={{'color':'transparent'}}>|</span>
                                        <button className='button-call-to-actions' onClick={()=>{this.next(index);}}>
                                            <h4>Next</h4>
                                        </button>
                                        <div className="footer">{(this.state.currentQuestion+1)}/{this.state.questions.length} question</div>
                                    </div>
                                ):(
                                    index===5?(
                                        <div className='card card-style' key={value.key}>
                                            <h2>{value.question}</h2>
                                            <Input fluid placeholder='Type your answer here...' onChange={(event)=>{this.setState({[value.key]:event.target.value})}}/>
                                            <br/>
                                                <div className="button-container">
                                                    <button class='button-call-to-actions' onClick={()=>{this.back(index);}}>
                                                        <h4>Previous</h4>
                                                    </button>
                                                    <span style={{'color':'transparent'}}>|</span>
                                                    {index===this.state.questions.length-1?(
                                                        <button class='button-call-to-actions' onClick={this.submit()}>
                                                            <h4>Submit</h4>
                                                        </button>
                                                    ):(
                                                        <button class='button-call-to-actions' onClick={()=>{this.next(index);}}>
                                                            <h4>Next</h4>
                                                        </button>
                                                    )}
                                                </div>
                                            
                                            <br/>
                                            <div class="footer">{(this.state.currentQuestion+1)}/{this.state.questions.length} question</div>
                                        </div>
                                    ):(
                                        <div className='card card-style' key={value.key}>
                                            <h2>{value.question}</h2>
                                            <Input fluid placeholder='Type your answer here...' onChange={(event)=>{this.setState({[value.key]:event.target.value})}}/>
                                            <br/>
                                                <div className="button-container">
                                                    <button class='button-call-to-actions' onClick={()=>{this.back(index);}}>
                                                        <h4>Previous</h4>
                                                    </button>
                                                    <span style={{'color':'transparent'}}>|</span>
                                                    {index===this.state.questions.length-1?(
                                                        <button class='button-call-to-actions' onClick={this.submit()}>
                                                            <h4>Submit</h4>
                                                        </button>
                                                    ):(
                                                        <button class='button-call-to-actions' onClick={()=>{this.next(index);}}>
                                                            <h4>Next</h4>
                                                        </button>
                                                    )}
                                                </div>
                                            
                                            <br/>
                                            <div class="footer">{(this.state.currentQuestion+1)}/{this.state.questions.length} question</div>
                                        </div>
                                    )
                                    
                                )
                            ):(null)
                            
                        )
                    })}
                    
                </div>
                
                
            </div>
        )
    }
}