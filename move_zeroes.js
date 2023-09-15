// TODO: move to it's own file
// TODO: case
function log_input(value) {
    if (typeof window === 'undefined') {
        console.log("input", value);
    } else {
        // TODO: it'd be nice to show the brackets
        const inputElement = document.getElementById("input");
        inputElement.innerHTML = value.toString();
    }
}

// TODO: case
function log_output(value) {
    if (typeof window === 'undefined') {
        console.log("output", value);
    } else {
        const element = document.getElementById("output");
        element.innerHTML = value.toString();
    }
}

// TODO: case
function log_array(value) {
    if (typeof window === 'undefined') {
        console.log(value);
    } else {
        const element = document.getElementById("array");
        // TODO: log to a table
        element.innerHTML += value.toString() + "<br/>";
    }
}

function renderCode(){
    // TODO: invert the if
    if (typeof window === 'undefined') {
        // console.log(value);
    } else {
        const element = document.getElementById("codeContainer");
        // TODO: can I pass one of the functions?
        // TODO: try multiline string
        element.innerHTML = moveZeroes;
        // "Blah blah<br/>Blah";
    }
}

function moveZeroes(nums) {
    let start = 0;
    let end = nums.length - 1;
    const moveValue = 0;
    while (start <= end) {
        log_array(nums);
        if (nums[start] == moveValue) {
            // Remove element at start pointer
            nums.splice(start, 1);
            // Add to the end of the array
            nums.push(moveValue);
            end--;
        } else {
            start++;
        }
    }
    return nums;
}

const nums = [0, 1, 0, 3, 12];
log_input(nums);
const output = moveZeroes(nums)
log_output(output);
renderCode();