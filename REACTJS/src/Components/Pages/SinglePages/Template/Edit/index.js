import React from 'react';
import { MailProvider } from '../../../../Context/MailContext';
import Mail from './Mail';
import Sidebar from './Sidebar/Sidebar';
import Nav from '../../../../UI/Nav';
import LoadingScreen from '../../../../UI/LoadingScreen';
import API from '../../../../../Utils/API/API';
import DraggableModal from '../../../../UI/DraggableModal/DraggableModal';

class TemplateEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blocks: [],
            loading: true,
            sideBarTab: 'blocks',
            currentIndex: 0,
            sideBarOptions: ''
        };
        this.handler = this.handler.bind(this)
    }

    componentDidMount() {
        //QUERY THE BLOCKS
        API.get(`/templates?id=${this.useQuery().get('id')}`)
            .then(res => {
                this.setState({ data: res.data, loading: false }, () => this.getAudienceCount())
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    loading: false
                })
            })
    }

    useQuery = () => {
        return new URLSearchParams(this.props.location.search);
    }

    handler(newState) {
        this.setState(newState)
    }

    render() {
        return (
            <MailProvider value={{ state: this.state, handler: this.handler }} >
                <div>
                    {this.state.loading &&
                        <LoadingScreen title="LOADING TEMPLATE . . ." />
                    }
                    <Nav />
                    <div className="EditMain">
                        <div className="EditSidebar">
                            <Sidebar />
                        </div>
                        <div className="EditPreview">
                            <div className="EditPreviewHolder">
                                <Mail />
                            </div>
                        </div>
                    </div>
                </div>
            </MailProvider>
        )
    }
}

export default TemplateEdit;