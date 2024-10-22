import * as fs from 'fs';

interface WordLengths {
    [length: number]: number;
}

// Function to generate the report from the file content
export function generateReport(filePath: string): string {
    let data: string;

    // Read the file content with error handling
    try {
        data = fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
        return `Error reading the file: ${(error as Error).message}`; // Return error message
    }

    if (!data) {
        return 'Error: No data read from file'; // Handle case where data is empty
    }

    const lines = data.split('\n');
    const numberOfLines: number = lines.length;
    const numberOfWords: number = data.split(/\s+/).filter(Boolean).length; // Split by whitespace and filter out empty strings
    const numberOfCharacters: number = data.length;

    const letters: string[] = data.match(/[a-zA-Z]/g) || []; // Match all letters
    const figures: string[] = data.match(/[0-9]/g) || []; // Match all digits
    const otherCharacters: string[] = data.match(/[^a-zA-Z0-9\s]/g) || []; // Match everything else

    // Count letters, figures, and other characters
    const numberOfLetters: number = letters.length;
    const numberOfFigures: number = figures.length;
    const numberOfOtherCharacters: number = otherCharacters.length;

    // Count words by length
    const wordLengths: WordLengths = {};
    const words: string[] = data.split(/\s+/).filter(Boolean);

    words.forEach(word => {
        const length: number = word.length;
        wordLengths[length] = (wordLengths[length] || 0) + 1;
    });

    // Generate the report
    let report = `File name: ${filePath}\n`;
    report += `Number of lines: ${numberOfLines}\n`;
    report += `Number of characters (total): ${numberOfCharacters}\n`;
    report += `Number of letters: ${numberOfLetters}\n`;
    report += `Number of figures: ${numberOfFigures}\n`;
    report += `Number of other characters: ${numberOfOtherCharacters}\n`;
    report += `Number of words: ${numberOfWords}\n`;

    // Output word counts by length
    report += 'Word counts by length:\n';
    const maxLength: number = Math.max(...Object.keys(wordLengths).map(Number));
    for (let i = 1; i <= maxLength; i++) {
        report += `Number of ${i} letter words: ${wordLengths[i] || 0}\n`;
    }

    return report; // Return the complete report
}

// Get the file path from command line arguments
const filePath: string = process.argv[2];

// Validate the input
if (!filePath) {
    console.error('Please provide a file path as an argument.');
    process.exit(1);
}

// Generate the report
console.log(generateReport(filePath));
