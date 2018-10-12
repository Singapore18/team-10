import React, { Component } from 'react';
import ResumePage from './ResumePage';
import html2canvas from 'html2canvas';
const jsPDF = require('jspdf');

export default class ResumeContainer extends Component {
        state = {
            fetched: false,
            data: {}
        }

    componentDidMount = async () => {
        if (!this.state.fetched) {
            // fetch data here

            // fake data
            let data = {
                quote: 'See my capabilities, not my disability!',
                personal_interests: 'I love shopping and listening to music. I also love playing badminton and spending time with my family!',
                work_strengths: 'I am helpful, initiative and always punctual for work!',
                work_experience: [
                    { job_title: 'Dish Washer', company: 'MacDonalds', periodStart: 'Jan 2018', periodEnd: 'May 2018'},
                    {job_title: 'Sales Assistant', company: 'Uniqlo', periodStart: 'Apr 2017', periodEnd: 'Dec 2017'}
                ],
                job_interests: ['F&B', 'Hotel'],
                support_me: 'Please give me simple and clear instructions, encouragement and guidance. I may be slow in the beginning but with time, let me show you my capabilities!',
                first_name: 'Jason',
                last_name: 'Tan',
                request_location: 'Bishan MRT',
                request_area: 'North East',
                request_time: '9am - 6pm',
                request_duration: 'long hours ( > 4h)',
                request_dow: 'weekends'
            }
            // update state
            setTimeout(() => {
                this.setState({
                    data,
                    fetched: true
                });
            }, 100);
        }
        setTimeout(() => {
            this.printDocument()
        }, 2000)
    }

    printDocument() {
        const input = document.getElementById('divToPrint');

        var useWidth = input.style.width;
        var useHeight = input.style.height;

        html2canvas(input, {
            height: useHeight,
            width: useWidth
        })
        .then((canvas) => {
            document.body.appendChild(canvas);
            const imgData = canvas.toDataURL('image/jpeg')

            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("download.pdf");
        });
    }
    render() {
        if (this.state.fetched) {
            return (
                <div>
                    <div style={{ height: 50}}>
                        <text> abc </text>
                    </div>
                    <ResumePage userInfo={this.state.data}/>
                </div>
            );
        }
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );

    }
}
