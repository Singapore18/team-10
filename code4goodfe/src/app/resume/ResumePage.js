import React, { Component } from 'react';
import {
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    Label,
    Message,
    Segment
} from 'semantic-ui-react';

class ResumePage extends Component {
    renderWorkExp(workExp) {
        const expLength = workExp.length;
        return workExp.map((exp, idx) => {
            return (
                <div>
                    <text>{`I have ${exp.job_title} experience from working at ${exp.company} during ${exp.periodStart} to ${exp.periodEnd}.`}</text>
                    { idx < expLength -1 ? <br /> : null}
                    { idx < expLength -1 ? <br /> : null}
                </div>
            )
        });
    }

    renderJobInterest(interests) {
        let combined = ''
        interests.forEach((interest) => {
            combined += `${interest} and `
        });
        combined = combined.substring(0, combined.length - 5);
        return <text>{`I am interested in ${combined} jobs.`} </text>
    }

    render() {
        const { userInfo } = this.props;
        return (
            <Container>
                {/* <div id="divToPrint" style={{ height: '100%', paddingTop: 30, width: '100%'}}> */}
                <div id="divToPrint" style={{ width: '3000px !important', height: '3000px !important' }}>
                      <Header as='h1' textAlign='center'>{`${userInfo.first_name} ${userInfo.last_name}`}</Header>
                      <Header as='h3' textAlign='center'>{userInfo.quote}</Header>
                      <Divider />
                      <Grid>
                          <Grid.Row>
                              <Grid.Column width={11}>
                                  <Segment style={{ height: 500}}>
                                     <Header as='h3'>My Personal Interests</Header>
                                     <text>{`${userInfo.personal_interests}`}</text>
                                     <Header as='h3'>My Work Strengths</Header>
                                     <text>{`${userInfo.work_strengths}`}</text>
                                     <Header as='h3'>My Work Experience</Header>
                                     {this.renderWorkExp(userInfo.work_experience)}
                                     <Header as='h3'>My Job Interest</Header>
                                     {this.renderJobInterest(userInfo.job_interests)}
                                     <Header as='h3'>How You Can Support Me</Header>
                                     <text>{`${userInfo.support_me}`}</text>
                                  </Segment>
                              </Grid.Column>
                              <Grid.Column width={5}>
                                  <div class='card' style={{ height: 500, width: '100%'}}>
                                      <div style={{ alignItems: 'center', width: '100%'}}>
                                          <Image
                                              src='https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png'
                                              size='medium'
                                              href='www.google.com'
                                              target='_blank'
                                          />
                                      </div>
                                      <Message>
                                          <Icon name='thumbs up outline' />
                                          <text> {`I stay near ${userInfo.request_location}`}</text>
                                          <br />
                                          <br />
                                          <Icon name='thumbs up outline' />
                                          <text> {`I prefer to work in the ${userInfo.request_area} area`}</text>
                                          <br />
                                          <br />
                                          <Icon name='thumbs up outline' />
                                          <text> {`I can work from ${userInfo.duration}`}</text>
                                          <br />
                                          <br />
                                          <Icon name='thumbs up outline' />
                                          <text> {`I can work on ${userInfo.request_dow}`}</text>
                                      </Message>
                                  </div>
                              </Grid.Column>
                          </Grid.Row>
                      </Grid>
                  </div>
               </Container>
        )
    }
}

export default ResumePage;
