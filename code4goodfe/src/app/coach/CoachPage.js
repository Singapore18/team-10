import React, { Component } from 'react';
import { Input, Popup, Button } from 'semantic-ui-react'
import Calendar from 'react-calendar';

import '../assets/css/theme.css';
import '../assets/css/coach.css';

export default class CoachPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }


    componentDidMount = async () => {
    }

    render() {
        return(
            <div class='coach-wrapper'>
                <h1>Edit your response here:</h1>
                <div class='coach-questions'>
                    <div class="column">
                        <div class='card card-style'>
                            <h2>What is your NRIC? :</h2>
                            <Input fluid placeholder='{Type your answer here...}'/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                        <div class="column">
                        <div class='card card-style'>
                            <h2>What is your full name?</h2>
                            <Input fluid placeholder='Type your answer here...'/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div class='card card-style'>
                        <h2>What do you like to do in your freetime :D</h2>
                        <Input fluid placeholder='Type your answer here...'/>
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>What are your strengths?</h2>
                        <Input fluid placeholder='Type your answer here...'/>
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>What have you worked as before</h2>
                        <Input fluid placeholder='Type your answer here...'/>
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>What skill do you have?</h2>
                        <Input fluid placeholder='Type your answer here...'/>
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>What kind of job do you like?</h2>
                        <Input fluid placeholder='Type your answer here...'/>
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>Please support me by...</h2>
                        <Input fluid placeholder='Type your answer here...'/>
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>I live near...</h2>
                        <Input fluid placeholder='Type your answer here...'/>
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>I prefer working in...</h2>
                        <Input fluid placeholder='Type your answer here...'/>
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>I can work from...</h2>
                        <Input fluid placeholder='Type your answer here...'/>
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>I can work...</h2>
                        <Input fluid placeholder='Type your answer here...'/>
                        <br/>
                        <br/>
                    </div>
                    <div class='card card-style'>
                        <h2>I can work on...</h2>
                        <Input fluid placeholder='Type your answer here...'/>
                        <br/>
                        <br/>
                    </div>
                    <button class='ui inverted button'>
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