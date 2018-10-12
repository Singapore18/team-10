import React, { Component } from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Input,
    Image,
    Label,
    List,
    Message,
    Segment
} from 'semantic-ui-react';

class ResumeHome extends Component {
    state = {
        searchQuery: '',
        results: [{
            full_name: 'Tom Hanks',
            quote: 'See my capabilities, not my disability!',
            interested_industries: ['F&B', 'Hotel'],
            work_experience: [
                { job_title: 'Dish Washer', company: 'MacDonalds', periodStart: 'Jan 2018', periodEnd: 'May 2018'},
                {job_title: 'Sales Assistant', company: 'Uniqlo', periodStart: 'Apr 2017', periodEnd: 'Dec 2017'}
            ],

        }, {
            full_name: 'Tom Hanks',
            quote: 'See my capabilities, not my disability!',
            interested_industries: ['F&B', 'Hotel'],
            work_experience: [
                { job_title: 'Dish Washer', company: 'MacDonalds', periodStart: 'Jan 2018', periodEnd: 'May 2018'},
                {job_title: 'Sales Assistant', company: 'Uniqlo', periodStart: 'Apr 2017', periodEnd: 'Dec 2017'}
            ],
        }]
    }

    componentDidMount() {
        // fetch(`http://127.0.0.1:5000/home`)
        // .then((res) => {
        //     this.setState({
        //         results: res
        //     })
        // })
        // .catch((err) => console.log(err));
    }

    onSearchCHange(text) {
        this.setState({ searchQuery: text });
    }

    onButtonClick() {

    }

    onUserClick(id) {
        this.props.history.push('/resume/123');
    }

    renderItems() {
        return  this.state.results.map((result) => {
            const user_exp = result.work_experience.map((work) => work.job_title);
            return (
                <List.Item onClick={this.onUserClick.bind(this)}>
                    <Segment>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={1} />
                                <Grid.Column width={10}>
                                    <Header as='h4'>{result.full_name}</Header>
                                    <br />
                                    <text> {`My Interests: ${result.interested_industries.join(', ')}`} </text>
                                    <br />
                                    <text> {`My Experiences: ${user_exp.join(',')}`} </text>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Header as='h5'>{result.quote}</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </List.Item>
            );
        });
    }

    render() {
        return (
            <Container style={{ paddingTop: 30}}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <Input
                                placeholder='Search for a particular skill'
                                onChange={this.onSearchChange}
                                style={{ width: '100%'}}
                            />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Button onClick={this.onButtonClick}>
                                Search
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider />
                <List>
                    {this.renderItems()}
                </List>
            </Container>
        )
    }
}

export default ResumeHome;
