module.exports = function (json) {

    let html = '<table align="center" bgcolor="white" width="600" style="max-width: 600px; margin: auto; background-color: white;"><tbody>';

    let style = '';
    let img_style = '';
    let icons = '';

    Array.prototype.forEach.call(json, e => {
        switch (e.tag) {
            case 'Header':

                style = '';

                Object.keys(e.options.style).forEach( function(k){
                    style += `${k}: ${e.options.style[k]};`
                });

                html += `<tr stlye="${style}"><td><h1 align="${e.options.align}">${e.options.content}</h1></td></tr>`;
                break;

            case 'Image':

                style = '';
                img_style = '';

                Object.keys(e.options.style).forEach( function(k){
                    style += `${k}: ${e.options.style[k]};`
                });

                Object.keys(e.options.imageStyle).forEach( function(k){
                    img_style += `${k}: ${e.options.img_style[k]};`
                });

                html += ` <tr style="${style}"><td><img alt="${e.options.alt}" style="${img_style}" width="${e.options.width}" height="${e.options.height}" align="${e.options.align}" src="${e.options.src}" /></td></tr>`;
                break;

            case 'Paragraph':

                style = '';

                Object.keys(e.options.style).forEach( function(k){
                    style += `${k}: ${e.options.style[k]};`
                });

                html += `<tr style="${style}"><td><p>${e.options.content}</p></td></tr>`;
                break;

            case 'SocialShare':

                icons = '';

                e.options.social.map((s, i) => {
                    if (s.display === true) {
                        icons += `<a style="margin: 5px; height: auto;" href="${s.link}" target="_blank" rel="noreferrer"><img width="32" height="32" alt="social-icon" src="${s.img}" /></a>`
                    }

                })

                style = '';

                Object.keys(e.options.style).forEach( function(k){
                    style += `${k}: ${e.options.style[k]};`
                });

                html += `<tr style="${style}"><td style="width: 100%; display: flex; align-items: center; justify-content: center;">${icons}</td></tr>`;
                break;
                
            default:
                html += '';
        }
      });

    html += '</tbody></table>';

    return html;

}