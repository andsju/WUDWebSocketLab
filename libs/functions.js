/**
 * parse JSON
 *
 * @param {*} data
 * @return {obj} 
 */
function parseJSON(data) {

    // try to parse json
    try {
        let obj = JSON.parse(data);

        return obj;        
    } catch (error) {
        
        // log to file in real application....
        return {error: "An error receving data...expected json format"};
    }
}

function toUpperCases(string) {

}

function randomNumber() {

    return 1;
}
export { parseJSON, toUpperCases, randomNumber }