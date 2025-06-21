## Observation (XML with XSD):

In this experiment, I created an XML Schema Definition (XSD) file to validate an XML document representing a bookstore. The XSD defined a complex element `bookstore`, which contained one or more `book` elements, each with child elements like `title`, `author`, and `price`.

I used various **XSD features** such as:
- `xs:complexType` and `xs:sequence` for structure
- `minOccurs` and `maxOccurs` for element constraints
- `xs:string` and `xs:decimal` data types
- `targetNamespace` and `elementFormDefault="qualified"` for namespace handling

The schema was then used to validate the XML document using tools that support XML Schema validation. This experiment helped me understand the differences between DTD and XSD, and how XSD provides richer validation through data types and namesp
![alt text](<Screenshot (37).png>)