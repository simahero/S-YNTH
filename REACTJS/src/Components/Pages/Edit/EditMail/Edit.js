import React from 'react';
import Mail from './Mail';
import Sidebar from './Sidebar';
import './Edit.css';
import Nav from '../../../UI/Nav';
import LoadingScreen from '../../../UI/LoadingScreen';

class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            blocks: [],
            sideBarTab: 'blocks',
            currentIndex: 0,
            sideBarOptions: '',
            html: ''
        };
        this.handler = this.handler.bind(this)
    }

    handler(newState) {
        this.setState(newState);
    }

    componentDidMount() {
        this.setState({
            loading: false
        });
    }

    render() {
        return (
            <div>
                {this.state.loading &&
                    <LoadingScreen />
                }
                <Nav />
                <div className="EditMain">
                    <Sidebar
                        state={this.state}
                        handler={this.handler}
                    />
                    <div className="EditPreview">
                        <div className="EditPreviewHolder">
                            <div className="EditTableHolder">
                                <Mail
                                    state={this.state}
                                    handler={this.handler}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Edit;


/*

import React, {useState, useEffect} from 'react';
import Mail from './Mail';
import Sidebar from './Sidebar';
import './Edit.css';
import Nav from '../../UI/Nav';

const Edit = () => {

    const [blocks, setBlocks] = useState([]);
    const [sidebar, setSidebar] = useState('blocks');
    const [currentBlock, setCurrentBlock] = useState(0);
    const [options, setOptions] = useState('');
    const [html, setHtml] = useState('');

    useEffect(() => {
        setHtml(document.getElementById('mail').outerHTML);
    }, [blocks]);

    const handleNewBlock = (new_block) => {
        setBlocks(blocks => [...blocks, new_block]);
    }

    const switchOptions = (name, index) => {
        setOptions(name);
        setCurrentBlock(index);
        setSidebar('options');
    }

    const setBlockOptions = (obj) => {
        let items = Array.from(blocks);
        items[currentBlock] = obj;
        setBlocks(items);
    }

    return (
        <div>
        <Nav />
        <div className="EditMain">
            <Sidebar
                sidebar={sidebar} // BLOCKS || OPTIONS TAB
                options={options} // IF OPTIONS WHICH ONE
                handleNewBlock={handleNewBlock}  //ADDING NEW BLOCK TO THE EMAIL
                setSidebar={setSidebar} //
                setBlockOptions={setBlockOptions}
                currentBlock={blocks[currentBlock]}
                />
            <div className="EditPreview">
                <div className="EditPreviewHolder">
                    <div className="EditTableHolder">
                        <Mail
                            blocks={blocks}
                            switchOptions={switchOptions}
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Edit;
*/