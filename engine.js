const TemplateEngine = (RawStr, data) => {

    const TagMatcher = /<%([^%>]+)?%>/g;

    const KeywordMatcher = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g;

    let code = "var r=[];\n";

    let cursor = 0;

    let match;

    function add(line, js) {

        if (js) {
            if (line.match(KeywordMatcher)) {
                code += line + "\n";
            }
            else {
                code += 'r.push(' + line + ');\n';
            }
        }
        else {
            if (line !== "") {
                code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
            }
        }

        return add;
    };

    while (match = TagMatcher.exec(RawStr)) {
        add(RawStr.slice(cursor, match.index))(match[1], true);

        cursor = match.index + match[0].length;
    }

    add(RawStr.slice(cursor))

    code += 'return r.join("");';

    return new Function(code.replace(/[\r\t\n]/g, "")).apply(data);
    
};