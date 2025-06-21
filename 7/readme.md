shopping-cart-session/
│
├── src/servlets/
│   ├── ProductServlet.java      // Displays product list
│   └── CartServlet.java         // Adds products to session-based cart
│
├── WebContent/
│   ├── index.html               // Home page
│   ├── catalog.html             // Product listing
│   ├── cart.html                // Shows session cart
│   └── WEB-INF/
│       ├── web.xml              // Servlet config
│       └── lib/
│           └── mysql-connector-j-9.3.0.jar
│
├── lib/
│   └── javax.servlet-api-4.0.1.jar
├── bin/                         // Compiled servlet files
├── README.md

 Setup Instructions
 Requirements:

Java JDK

Apache Tomcat

MySQL

VS Code (with Java support)

Servlet API (javax.servlet-api-4.0.1.jar)

 Running the Project:

Add JARs to lib/:

mysql-connector-j-9.3.0.jar

javax.servlet-api-4.0.1.jar

Compile Servlets:


javac -cp "lib/*" -d bin src/servlets/ProductServlet.java src/servlets/CartServlet.java
Deploy to Tomcat:

Copy WebContent/ to tomcat/webapps/shopping-cart-session/

Move bin/ contents to WEB-INF/classes/

Start Tomcat

Open in Browser:


http://localhost:8080/shopping-cart-session/index.html
 Database Setup
Database: shopping_cart
Table: products

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  price DECIMAL(10,2)
);