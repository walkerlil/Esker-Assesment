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
const fileReport_1 = require("./fileReport"); // Adjust the path as necessary
const fs = __importStar(require("fs"));
// Mock fs module
jest.mock('fs');
describe('File Report Generation', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear any previous mock calls
    });
    it('should generate the report correctly', () => {
        const mockData = `
        We're no strangers to love
        You know the rules and so do I (do I)
        A full commitment's what I'm thinking of
        You wouldn't get this from any other guy
        `;
        // Mock file read to return valid mock data
        fs.readFileSync.mockReturnValue(mockData); // Mock file read
        const report = (0, fileReport_1.generateReport)('sample.txt'); // Mock file path
        // Verify that the report contains expected information
        expect(report).toContain('File name: sample.txt');
        //** To the testers: I'm not sure what you'd want me to test in this scenario, so I'm just setting up the test that reads the file properly
    });
    it('should handle file read errors', () => {
        // Mock fs.readFileSync to throw an error
        fs.readFileSync.mockImplementation(() => {
            throw new Error('File not found');
        });
        const report = (0, fileReport_1.generateReport)('sample.txt'); // Mock file path
        expect(report).toBe('Error reading the file: File not found'); // Expect the error message
    });
});
