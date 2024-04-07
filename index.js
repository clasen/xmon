class xmon {
    static jsonToXml(json) {
        let xml = '';
        function convertToXml(obj, indent = '') {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    xml += indent + '<' + key + '>';
                    if (typeof obj[key] === 'object' && obj[key] !== null) {
                        xml += '\n';
                        convertToXml(obj[key], indent + '  ');
                        xml += indent;
                    } else {
                        xml += obj[key];
                    }
                    xml += '</' + key + '>\n';
                }
            }
        }
        convertToXml(json);
        return xml;
    }

    static xmlToJson(xml) {
        xml = xml.replace(/>\s+</g, '><');
        const rootMatch = xml.match(/<(\w+)/);
        if (!rootMatch) return {};

        const rootName = rootMatch[1];
        const json = {};

        function processElement(element, currentJson) {
            const matches = element.match(/<(\w+)>(.*?)<\/\1>/g) || [];
            matches.forEach((match) => {
                const innerMatch = match.match(/<(\w+)>(.*?)<\/\1>/);
                const elementName = innerMatch[1];
                const elementValue = innerMatch[2];
                if (elementValue.includes('<')) {
                    currentJson[elementName] = {};
                    processElement(elementValue, currentJson[elementName]);
                } else {
                    currentJson[elementName] = elementValue;
                }
            });
        }

        processElement(xml, json);
        return json;
    }
}

module.exports = xmon;