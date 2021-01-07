import React from 'react';
import API from '../../../../Utils/API/API';

import Header from './Blocks/Header';
import Image from './Blocks/Image';
import Paragraph from './Blocks/Paragraph';
import SocialShare from './Blocks/SocialShare';

class PreviewTemplate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            template: []
        }

    }

    useQuery = () => {
        return new URLSearchParams(this.props.location.search);
    }

    componentDidMount() {
        if (this.useQuery().get('id')) {
            API.get(`/templates?id=${this.useQuery().get('id')}`)
                .then(res => {
                    this.setState({ template: JSON.parse(res.data[0]) })
                })
                .catch(err => console.log(err))

        }
    }

    render() {
        return (
            <table id="mail" width="600" style={{ maxWidth: "600", margin: "auto", backgroundColor: "white", height: "850" }}>
                <tbody>
                    {this.state.template.map((block, index) => {
                        switch (block.tag) {
                            case 'Header':
                                return <Header index={index} />;
                            case 'Image':
                                return <Image index={index} />;
                            case 'Paragraph':
                                return <Paragraph index={index} />;
                            case 'SocialShare':
                                return <SocialShare index={index} />;
                        }
                    })
                    }
                </tbody>
            </table>
        )
    }

}

export default PreviewTemplate;