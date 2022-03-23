// set up a fetch function & get some data
// prams = the optional object that will be passed to dataMiner
// this will let us pass user ID or name that we can use in database query
// to get one row of data - a more specific query => { id : 1 } or { id: 1, name : "Trevor" }
function getData(prams, cb) { // cb = callback, a function runs when an operation is done
    
    // retrieve data object
    // only one dot in the path "./data.json"
    let baseURL = "./includes/index.php"; 
    
    if (prams) {
        let keys = Object.keys(prams); // Object.keys creates an array of keys => ["id", "name"]
        // loop through the keys using this Array.map method (look on MDN) and create a query string for each key
        let newQStringPrams = keys.map(key => `${key}=${prams[key]}`).join("&&");  // id=1&&name=Trevor

        // take the original baseURL which is index.php and add the query string to it 
        baseURL += `?${newQStringPrams}`;
    }

    fetch(baseURL) // go and get the data
    .then(res => res.json()) // take the data back, and convert it to a js object. res = result
    .then(data => {
        console.table(data);

        cb(data[0]); // pass data to buildTeam function
    })
    .catch(error => console.error(error));
}

// another way to make "getData" public
export { getData }
