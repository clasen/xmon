const xmon = require('../index');

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