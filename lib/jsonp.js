var unique = 0;
const loadJSONP = (url, callback, context) => {
    // init
    var name = '_jsonp_' + unique++;
    if (url.match(/\?/)) url += '&callback=' + name;
    else url += '?callback=' + name;

    // Create script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Setup handler make `callback` as global function
    window[name] = (data) => {
        callback.call((context || window), data);
        document.getElementsByTagName('head')[0].removeChild(script);
        script = null;
        delete window[name];
    };

    // Load JSON
    document.getElementsByTagName('head')[0].appendChild(script);
};

export default loadJSONP;