export const Questions = [
    {
        questionText: 'What does PHP stand for?',
        answerOption: [
            { answerText: 'PHP: Hypertext Preprocessor', isCorrect: true },
            { answerText: 'Personal Hypertext Processor', isCorrect: false },
            { answerText: 'Private Home Page', isCorrect: false },
        ]
    },

    {
        questionText: 'PHP server scripts are surrounded by delimiters, which?',
        answerOption: [
            { answerText: '<?php...?>', isCorrect: true },
            { answerText: '<?php>...</?>', isCorrect: false },
            { answerText: '<&>...</&>', isCorrect: false },
            { answerText: '<script>...</script>', isCorrect: false },
        ]
    },

    {
        questionText: 'How do you write "Hello World" in PHP',
        answerOption: [
            { answerText: '"Hello World";', isCorrect: false },
            { answerText: 'echo "Hello World";', isCorrect: true },
            { answerText: 'Document.Write("Hello World");', isCorrect: false },
        ]
    },

    {
        questionText: 'All variables in PHP start with which symbol?',
        answerOption: [
            { answerText: '$', isCorrect: true },
            { answerText: '!', isCorrect: false },
            { answerText: '&', isCorrect: false },
        ]
    },

    {
        questionText: 'The PHP syntax is most similar to:',
        answerOption: [
            { answerText: 'VBScript', isCorrect: false },
            { answerText: 'JavaScript', isCorrect: false },
            { answerText: 'Perl and C', isCorrect: true },
        ]
    },

    {
        questionText: 'How do you get information from a form that is submitted using the "get" method?',
        answerOption: [
            { answerText: 'Request.Form;', isCorrect: false },
            { answerText: '$_GET[];', isCorrect: true },
            { answerText: 'Request.QueryString;', isCorrect: false },
        ]
    },

    {
        questionText: 'Include files must have the file extension ".inc"',
        answerOption: [
            { answerText: 'False', isCorrect: true },
            { answerText: 'True', isCorrect: false },
        ]
    },

    {
        questionText: 'What is the correct way to include the file "time.inc" ?',
        answerOption: [
            { answerText: '<?php include "time.inc"; ?>', isCorrect: true },
            { answerText: '<?php include file="time.inc"; ?>', isCorrect: false },
            { answerText: '<!-- include file="time.inc" -->', isCorrect: false },
            { answerText: '<?php include:"time.inc"; ?>', isCorrect: false },
        ]
    },

    {
        questionText: 'What is the correct way to create a function in PHP?',
        answerOption: [
            { answerText: 'new_function myFunction()', isCorrect: false },
            { answerText: 'function myFunction()', isCorrect: true },
            { answerText: 'create myFunction()', isCorrect: false },
        ]
    },

    {
        questionText: 'What is the correct way to open the file "time.txt" as readable?',
        answerOption: [
            { answerText: 'fopen("time.txt","r+");', isCorrect: false },
            { answerText: 'open("time.txt");', isCorrect: false },
            { answerText: 'open("time.txt","read")', isCorrect: false },
            { answerText: 'fopen("time.txt","r");', isCorrect: true },
        ]
    },
]