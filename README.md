# Introduction to AJAX
- AJAX = "Asynchronous JavaScript and XML"
- AJAX is a group of interrelated web development techniques used on the client-side to create asynchronous web applications.
- With AJAX, web applications can send data to and retrieve from a server asynchronously (in the background) without interfering
with the display and behavior of the existing webpage.
- Data can be retrieved using the XMLHttpRequest object. Despite the name, the use of XML is not required (JSON is often used
in the AJAJ variant), and the requests do not need to be asynchronous.
- AJAX is not a simple technology, but a group of technologies.
- HTML and CSS can be used in combination to mark up and style information.
- The DOM is accessed with JavaScript to dynamically display - and allow the user to interact with - the information presented.
- JavaScript and the XMLHttpRequest object provide a method for exchanging asynchronously between browser and server to avoid
full page reloads.

#AJAX Technolgies
- The term AJAX has come to represent a broad group of web technolgies that can be used to implement a web application that
communicates with the server in the background without interfering with the current state of the page.
- In the article that coined the term AJAX, Jesse James Garrett explained that the following technolgies are incorporated:
<ul>
<li>HTML (or XHTML) and CSS for presentation.</li>
<li>The Domcument Object Model (DOM) for dynamic display of and interaction with data.</li>
<li>XML for the interchange of data, and XLST for its manipulation.</li>
<li>The XMLHttpRequest object for asynchronous communication.</li>
<li>JavaScript to bring these technologies together.</li>
</ul>
- Since then, there have been a number of developments in the technolgies used in the AJAX application, and the definition 
of the term AJAX.
- XML is not required for data interchange and, therefore, XSLT is not required for the manipulation of data.
- JavaScript Object Notation (JSON) is often used as an alternative format, although other formats such as preformatted
HTML or plain text are always used.

#Drawbacks to AJAX
- In pre-HTML5 browsers, pages dynamically created using successive AJAX requests did not automatically register themselves
with the browser's history engine, so clicking the browser's back button may not have returned the browser to an earlier state
of the AJAX-enabled page, but may have instead returned to the last full page visited before it.
