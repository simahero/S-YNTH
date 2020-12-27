import React, {useState} from 'react';

const ImageOptions = (props) => {

    const [link, setLink] = useState(props.currentBlock.options.src);

    const onLinkChange = (input) => {
        setLink(input);
        let temp = props.currentBlock;
        temp.options.src = input;
        props.setBlockOptions(temp);
    }

    return (
        <div>
            ImageOptions
            link: <input value={link} type="text" onChange={(e) => {onLinkChange(e.target.value)}}></input>
        </div>
    )
}

export default ImageOptions;