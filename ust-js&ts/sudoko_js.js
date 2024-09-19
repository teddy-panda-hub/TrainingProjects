// script.js

const size = 9; // Size of the Sudoku grid
const grid = document.getElementById('sudoku-grid');

// Generate the Sudoku grid
function createGrid() {
    grid.innerHTML = '';
    for (let i = 0; i < size; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.addEventListener('input', validateInput);
            cell.appendChild(input);
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

// Validate input to only allow numbers 1-9
function validateInput(event) {
    const input = event.target;
    if (input.value !== '' && !/^[1-9]$/.test(input.value)) {
        input.value = '';
    }
}

// Initialize the grid
createGrid();

// Event listeners for buttons
document.getElementById('check-btn').addEventListener('click', checkSolution);
document.getElementById('solve-btn').addEventListener('click', solveSudoku);

// Placeholder functions for solving and checking
function checkSolution() {
    alert('Check solution feature is not implemented yet.');
}

function solveSudoku() {
    alert('Solve feature is not implemented yet.');
}
