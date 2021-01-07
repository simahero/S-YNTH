module.exports = {
    header: {
        tag: 'Header',
        options: {
            style: {
                color: '#000000',
            },
            content: 'Header',
            align: 'center',
        }
    },
    image: {
        tag: 'Image',
        options: {
            style: {},
            imageStyle: {},
            width: 600,
            height: 'auto',
            align: "center",
            src: ''
        }
    },
    parahraph: {
        tag: 'Paragraph',
        options: {
            style: {},
            content: ''
        }
    },
    socialshare: {
        tag: 'SocialShare',
        options: {
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%"
            },
            social: [{
                name: "facebook",
                display: true,
                img: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png",
                link: "#"
            },
            {
                name: "instagram",
                display: true,
                img: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
                link: "#"
            },
            {
                name: "youtube",
                display: true,
                img: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png",
                link: "#"
            },
            {
                name: "twitter",
                display: true,
                img: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png",
                link: "#"
            }]
        }
    }
}