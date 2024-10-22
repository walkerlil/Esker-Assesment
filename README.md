# Esker-Assesment
This project is a TypeScript application that reads a text file and generates a report detailing its contents, including statistics such as the number of lines, characters, letters, figures, words, and word lengths.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Expected Output](#output)

## Features

- Reads a specified text file.
- Generates a comprehensive report including:
  - Number of lines
  - Total number of characters
  - Number of letters, figures, and other characters
  - Number of words
  - Count of words by length

## Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Yarn**: This project uses Yarn as the package manager. If you don't have Yarn installed, you can install it by following the instructions on the [Yarn website](https://yarnpkg.com/getting-started/install).

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. Install the dependencies using Yarn: 

    yarn install

3. Install TypeScript Definitions (Node.js)

    yarn add --dev @types/node

## Usage

I have provided a complied version of the finished project (fileReport.js) as well as a jest file (fileReport.test.js); feel free to delete these while testing the compilation script. Thre are scripts written for compiling, testing, and running the application. 

1. TEST (there are only 2 sample test.): 

    yarn test 
    // jest fileReport.test.ts sample.txt

2. COMPILE:  

    yarn compile
    // npx tsc 

3.  RUN: 

    yarn start
    // node fileReport.js sample.txt


## Expected Output
with an unchanged sample.txt file, the output should be as follows:

File name: sample.txt
Number of lines: 54
Number of characters (total): 1767
Number of letters: 1382
Number of figures: 0
Number of other characters: 33
Number of words: 353
Word counts by length:
Number of 1 letter words: 10
Number of 2 letter words: 30
Number of 3 letter words: 116
Number of 4 letter words: 64
Number of 5 letter words: 93
Number of 6 letter words: 19
Number of 7 letter words: 15
Number of 8 letter words: 2
Number of 9 letter words: 1
Number of 10 letter words: 2
Number of 11 letter words: 0
Number of 12 letter words: 1 

Feel free to edit the sample.txt file to change the results!