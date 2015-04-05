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
of the AJAX-enabled page, but may have instead returned to the last full page visited before it. Such behavior - navigating
between pages instead of navigating between page states - may be desirable, but if fine-grained tracking of page state is
required, then a pre-HTML5 workaround was to use invisible iframes to trigger changes in the browser's history. A workaround
implemented by AJAX techniques is to change the URL fragment identifier (the part of a URL after the "#") when an AJAX-enabled
page is accessed and monitor it for changes. HTML5 provides an extensive API standard for working with the browser's history engine.
- Dynamic web page updates also make it difficult to bookmark and return to a particular state of the application. Solutions
to this problem exist, many of which use the URL fragment identifier. The solution provided by HTML5 for the above problem also
applies to this.
- Depending on the nature of the AJAX application, dynamic page updates may interfere disruptively with user interactions,
especially if working on an unstable internet connection. For instance, editing a search field may trigger a query to a server
for search completions, but the user may not know that a search completion popup is forthcoming, and if the internet connection
is slow, the popup may show up at an inconvenient time, when the user has already proceeded to do something else.
- Most web crawlers do no execute JavaScript code, so in order to be indexed by search engines, a web application must provide
an alternative means of accessing the content that would normally be retrieved with AJAX. It has been suggested that a headless
browser may be used to index content provided by AJAX-enabled websites.
- Any user whose browser does not support JavaScript or XMLHttpRequest, or simply has this functionality disabled, will not properly be able to load pages that depend on AJAX. Devices such as smartphones and PDAs may not have support for the required
technologies, though this is becoming less of a problem. The only way to let the user carry out functionality is to fall back to non-JavaScript methods. This can be achieved by making sure that links and forms can be resolved properly by not relying solely
on AJAX.
- Similarly, some Java applications are built in a way that cannot be read by screen-reading technologies, such as JAWS. 
The WAI-ARIA standards provide a way to provide hints in such a case.
- Screen readers that are able to use AJAX may still not be able to properly read the dynamically generated content.
- The same origin policy prevents some AJAX techniques from being used across domains although the W3C has a draft of the
XMLHttpRequest object that would enable this functionality. Methods exist to sidestep this security feature by using a 
special cross domain communications channel embedded as an iframe within the page.
- The asynchronous call-back style of programming required can lead to complex code that is hard to maintain, to bug, and to test.
