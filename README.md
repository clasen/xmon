# 📦 xmon

A simple and minimal package for converting between XML and JSON formats.

## 🚀 Installation

You can install the package using npm:

```bash
npm install xmon
```

## 🛠️ Usage

To use the package, simply import the `xmon` class and call the appropriate method:

```javascript
const xmon = require('xmon');

// Converting JSON to XML
const json = {
  person: {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  }
};

const xml = xmon.jsonToXml(json);
console.log(xml);
/*
Output:
<person>
 <name>John Doe</name>
 <age>30</age>
 <city>New York</city>
</person>
*/

// Converting XML to JSON
const xmlString = `
  <book>
    <title>The Great Gatsby</title>
    <author>
        <firstname>Scott</firstname>
        <lastname>Fitzgerald</lastname>
    </author>
    <year>1925</year>
  </book>
`;

const jsonResult = xmon.xmlToJson(xmlString);
console.log(jsonResult);
/*
Output:
{
  book: {
    title: 'The Great Gatsby',
    author: { firstname: 'Scott', lastname: 'Fitzgerald' },
    year: '1925'
  }
}
*/
```

## 📝 Note
Please note that this package does not support XML attributes. It only handles element names and values.

## 📚 API

### `xmon.jsonToXml(json)`

Converts a JSON object to an XML string.

- `json` (object): The JSON object to convert.
- Returns: (string) The converted XML string.

### `xmon.xmlToJson(xml)`

Converts an XML string to a JSON object.

- `xml` (string): The XML string to convert.
- Returns: (object) The converted JSON object.

## 🤝 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the [GitHub repository](https://github.com/clasen/xmon).

## 📄 License

The MIT License (MIT)

Copyright (c) Martin Clasen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.