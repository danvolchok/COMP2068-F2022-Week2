// use a closure to control scope of var (like JAva)

function parent() {
    let message = 'Hello World'

    function child() {
        console.log(message)
    }
    
    // call teh child
    child()
}

// call the parent
parent()

// below is outside of scope, will not work
// console.log(message)

