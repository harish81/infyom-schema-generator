export function jsonFormatter( json ) {
    var p = [],
        push = function( m ) { return '\\' + p.push( m ) + '\\'; },
        pop = function( m, i ) { return p[i-1] },
        tabs = function( count ) { return new Array( count + 1 ).join( '\t' ); };
    p = [];
    var out = "",
        indent = 0;

    // Extract backslashes and strings
    json = json
        .replace( /\\./g, push )
        .replace( /(".*?"|'.*?')/g, push )
        .replace( /\s+/, '' );

    // Indent and insert newlines
    for( var i = 0; i < json.length; i++ ) {
        var c = json.charAt(i);

        switch(c) {
            case '{':
            case '[':
                out += c + "\n" + tabs(++indent);
                break;
            case '}':
            case ']':
                out += "\n" + tabs(--indent) + c;
                break;
            case ',':
                out += ",\n" + tabs(indent);
                break;
            case ':':
                out += ": ";
                break;
            default:
                out += c;
                break;
        }
    }

    // Strip whitespace from numeric arrays and put backslashes
    // and strings back in
    out = out
        .replace( /\[[\d,\s]+?\]/g, function(m){ return m.replace(/\s/g,''); } )
        .replace( /\\(\d+)\\/g, pop ) // strings
        .replace( /\\(\d+)\\/g, pop ); // backslashes in strings

    return out;
};


export const saveFile = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var json = data,
            blob = new Blob([json], {type: "octet/stream"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());