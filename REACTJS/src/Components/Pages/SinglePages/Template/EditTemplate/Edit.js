import React from 'react';
import { MailProvider } from '../../../../Context/MailContext';
import Mail from './Mail';
import Sidebar from './Sidebar';
import Nav from '../../../../UI/Nav';
import LoadingScreen from '../../../../UI/LoadingScreen';

class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blocks: [],
            loading: true,
            sideBarTab: 'blocks',
            currentIndex: 0,
            sideBarOptions: '',
            html: ''
        };
        this.handler = this.handler.bind(this)
    }

    handler(newState) {
        this.setState(newState, () => {
            console.log(JSON.stringify(this.state.blocks));
        });
    }

    componentDidMount() {
        //QUERY THE BLOCKS
        this.setState({
            loading: false
        });
    }

    render() {
        return (
            <MailProvider value={{ state: this.state, handler: this.handler }} >
                <div>
                    {this.state.loading &&
                        <LoadingScreen />
                    }
                    <Nav />
                    <div className="EditMain">
                        <Sidebar />
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

export default Edit;