import React from 'react';
import API from '../../../API/API';
import AudienceDataTable from '../../../UI/AudienceDataTable';
import './Dashboard.css';

class Audience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        API.get('/get/audiences')
            .then(res => {
                console.log(res.data);
                this.setState({
                    loading: false,
                    data: res.data
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    loading: false,
                    data: []
                });
            });

    }

    render() {
        return (
            <div>
                <div className="DashboardHeadingWrapper">
                    <h2 className="DashboardHeading">Audience</h2>
                </div>
                <AudienceDataTable rows={this.state.data} loading={this.state.loading} />
            </div>
        )
    }

}

export default Audience;
