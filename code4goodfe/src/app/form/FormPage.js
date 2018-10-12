import React, { Component } from 'react';
import { Input, Popup, Button } from 'semantic-ui-react'
import Calendar from 'react-calendar';

import '../assets/css/theme.css';
import '../assets/css/form.css';

export default class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            isDone: false,
            currentQuestion: 4,
            questions: [
                {question:'What is your NRIC? :)', key: ''},
                {question:'What is your full name?', key: ''},
                {question:'What do you like to do in your freetime :D', key: ''},
                {question:'What are your strengths?', key: ''},
                {question:'What have you worked as before?', key: ''},
                {question:'What skill do you have?', key: ''},
                {question: 'What kind of job do you like?', key:''},
                {question: 'Please support me by...', key:''},
                {question: 'I live near...', key:''},
                {question: 'I prefer working in...', key:''},
                {question: 'I can work from...', key:''},
                {question: 'I can work...', key:''},
                {question: 'I can work on...', key:''},
            ],

            // For sending back json
            start_period: '',
            end_period: ''
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
                                    <div class='card card-style' key={index}>
                                        <h2>{value.question}</h2>
                                        <div>
                                            <h4>Job Role</h4>
                                            <Input fluid placeholder='Type your answer here...'/>
                                            <h4>Company</h4>
                                            <Input fluid placeholder='Type your answer here...'/>
                                            <h4>Period</h4>
                                            From {this.state.start_period.toString()}
                                            <Popup
                                                wide='very'
                                                hoverable
                                                trigger={<Button icon='calendar alternate' color='violet'/>}
                                            >
                                                <Calendar
                                                    onChange={(date)=>{this.setState({start_period: date})}}
                                                    value={this.state.start_period}
                                                />
                                            </Popup>
                                            To {this.state.end_period.toString()}
                                            <Popup
                                                wide='very'
                                                hoverable
                                                trigger={<Button icon='calendar alternate' color='violet'/>}
                                            >
                                                <Calendar
                                                    onChange={(date)=>{this.setState({end_period: date})}}
                                                    value={this.state.end_period}
                                                />
                                            </Popup>
                                        </div>
                                        
                                        <br/>
                                        <button class='button-call-to-actions' onClick={()=>{this.back(index);}}>
                                            <h4>Previous</h4>
                                        </button>
                                        <button class='button-call-to-actions' onClick={()=>{this.next(index);}}>
                                            <h4>Next</h4>
                                        </button>
                                        <br/>
                                        <div class="footer">{(this.state.currentQuestion+1)}/{this.state.questions.length} question</div>
                                    </div>
                                ):(
                                    <div class='card card-style' key={index}>
                                        <h2>{value.question}</h2>
                                        <Input fluid placeholder='Type your answer here...'/>
                                        <br/>
                                        <button class='button-call-to-actions' onClick={()=>{this.back(index);}}>
                                            <h4>Previous</h4>
                                        </button>
                                        <button class='button-call-to-actions' onClick={()=>{this.next(index);}}>
                                            <h4>Next</h4>
                                        </button>
                                        <br/>
                                        <div class="footer">{(this.state.currentQuestion+1)}/{this.state.questions.length} question</div>
                                    </div>
                                )
                            ):(null)
                            
                        )
                    })}
                    
                </div>
                
                
            </div>
        )
    }
}