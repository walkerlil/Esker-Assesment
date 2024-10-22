"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReport = generateReport;
const fs = __importStar(require("fs"));
// Function to generate the report from the file content
function generateReport(filePath) {
    let data;
    // Read the file content with error handling
    try {
        data = fs.readFileSync(filePath, 'utf-8');
    }
    catch (error) {
        return `Error reading the file: ${error.message}`; // Return error message
    }
    if (!data) {
        return 'Error: No data read from file'; // Handle case where data is empty
    }
    const lines = data.split('\n');
    const numberOfLines = lines.length;
    const numberOfWords = data.split(/\s+/).filter(Boolean).length; // Split by whitespace and filter out empty strings
    const numberOfCharacters = data.length;
    const letters = data.match(/[a-zA-Z]/g) || []; // Match all letters
    const figures = data.match(/[0-9]/g) || []; // Match all digits
    const otherCharacters = data.match(/[^a-zA-Z0-9\s]/g) || []; // Match everything else
    // Count letters, figures, and other characters
    const numberOfLetters = letters.length;
    const numberOfFigures = figures.length;
    const numberOfOtherCharacters = otherCharacters.length;
    // Count words by length
    const wordLengths = {};
    const words = data.split(/\s+/).filter(Boolean);
    words.forEach(word => {
        const length = word.length;
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
    const maxLength = Math.max(...Object.keys(wordLengths).map(Number));
    for (let i = 1; i <= maxLength; i++) {
        report += `Number of ${i} letter words: ${wordLengths[i] || 0}\n`;
    }
    return report; // Return the complete report
}
// Get the file path from command line arguments
const filePath = process.argv[2];
// Validate the input
if (!filePath) {
    console.error('Please provide a file path as an argument.');
    process.exit(1);
}
// Generate the report
console.log(generateReport(filePath));
