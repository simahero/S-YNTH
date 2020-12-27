import React, {useState} from 'react';

const SocialShareOptions = (props) => {

    const [links, setLinks] = useState(props.currentBlock.options.social);

    const [checkbox, setCheckbox] = useState({
        facebook: 'true',
        instagram: 'true',
        youtube: 'true',
        twitter: 'true'
    });

    const onLinkChange = (input, i) => {
        let temp = props.currentBlock;
        temp.options.social[i].link = input;
        props.setBlockOptions(temp);
        let links = Array.from(links);
        links[i].link = input;
        setLinks(links);
    }

    const onDisplayChange = (checked, i) => {
        checkbox[checked] = !checkbox[checked];
        let temp = props.currentBlock;
        temp.options.social[i].display = checked;
        props.setBlockOptions(temp);
    }

    return (
        <div>
            <h3 align="center">Social Options</h3>
            <div>
                <div>
                    <h5>Facebook</h5>
                    display: <input type="checkbox" defaultChecked={checkbox.facebook} onChange={(e) => {onDisplayChange(e.target.checked, 0)}}></input >
                    <br />
                    link: <input value={links[0].link} type="text" onChange={(e) => {onLinkChange(e.target.value, 0)}}></input>
                </div>
                <div>
                    <h5>Instagram</h5>
                    display: <input type="checkbox" defaultChecked={checkbox.instagram} onChange={(e) => {onDisplayChange(e.target.checked, 1)}} ></input >
                    <br />
                    link: <input value={links[1].link} type="text" onChange={(e) => {onLinkChange(e.target.value, 1)}}></input>
                </div>
                <div>
                    <h5>youtube</h5>
                    display: <input type="checkbox" defaultChecked={checkbox.youtube} onChange={(e) => {onDisplayChange(e.target.checked, 2)}}></input >
                    <br />
                    link: <input value={links[2].link} type="text" onChange={(e) => {onLinkChange(e.target.value, 2)}}></input>
                </div>
                <div>
                    <h5>twitter</h5>
                    display: <input type="checkbox" defaultChecked={checkbox.twitter} onChange={(e) => {onDisplayChange(e.target.checked, 3)}}></input >
                    <br />
                    link: <input value={links[3].link} type="text" onChange={(e) => {onLinkChange(e.target.value, 3)}}></input>
                </div>
            </div>
        </div>
    )
}

export default SocialShareOptions;