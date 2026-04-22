//  Normal Function

// function Myiife(params) {
//     console.log(`DB Connected`);
// }
    
// Myiife()
    
// Immediately Invoked Function Expressions (IIFE)

(function Myiife(params) {
    console.log(`DB Connected`);
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')