## Steps we followed:
    1. Create a post api on the server side
    2. Client side send data via post
    3. Set fetch method inside the fetch options (second parameter) in client side and options will have headers: 'content-type':'application/json'. Do not forget to send data by stringify data in the body.
    4. To get data in server side we need to use express.json() middleware.

## nodemon
nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

## Cors
Cross-Origin Resource Sharing (CORS) is an HTTP-header-based mechanism that enables a server or API to specify origins from which resources can be accessed and loaded. CORS is used for authorized resource sharing with external third parties. For example, CORS is needed when pulling data from external APIs or allowing authorized third-party access to a server's resources

