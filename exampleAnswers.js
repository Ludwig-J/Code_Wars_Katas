
//timeConverter EXAMPLE ANSWER
function timeConverter(seconds) {
    
    //Calcualte days
    const days = Math.floor(seconds / 86400 ); 
    // Calculate remaining hours 
    const hours = Math.floor((seconds % 86400) / 3600);
    // Calculate remaining minutes 
    const minutes = Math.floor((seconds % 3600) / 60);
    // Calculate remaining seconds 
    const remainingSeconds = seconds % 60;

    let result = '';

    // Construct the result string
    if (days !== 0 ) {
        result +=  `${days} days, `;
    }
    if (hours !== 0) {
        result +=  `${hours} hours, `;
    }
    if (minutes !== 0) {
        result += `${minutes} minutes and `;
    }
    if (remainingSeconds !== 0) {
        result += `${remainingSeconds} seconds`;
    }

    return result
}



//reArrange EXAMPLE ANSWER
function reArrange(string) {
    
    // Split the string into an array
    const arr = string.split(',');

    // Separate alphabetical and numerical elements
    const letters = [];
    const numbers = [];
    
    arr.forEach(element => {
        if (!isNaN(element)) {
            numbers.push(Number(element));
        } else {
            letters.push(element);
        }
    });

    // Sort alphabetical and numerical arrays
    letters.sort();
    numbers.sort((a, b) => a - b);

    // Concatenate the sorted arrays into a single string
    const result = letters.concat(numbers).join(',');

    return result;
}


