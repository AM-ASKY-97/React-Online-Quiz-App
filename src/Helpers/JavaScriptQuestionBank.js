export const Questions = [
    {
        questionText: 'Inside which HTML element do we put the JavaScript?',
        answerOption: [
            { answerText: '<scripting>', isCorrect: false },
            { answerText: '<javascript>', isCorrect: false },
            { answerText: '<script>', isCorrect: true },
            { answerText: '<js>', isCorrect: false },
        ]
    },

    {
        questionText: 'Where is the correct place to insert a JavaScript?',
        answerOption: [
            { answerText: 'Both the <head> section and the <body> section are correct', isCorrect: true },
            { answerText: 'The <head> section', isCorrect: false },
            { answerText: 'The <body> section', isCorrect: false },
        ]
    },

    {
        questionText: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answerOption: [
            { answerText: '<script name="xxx.js">', isCorrect: false },
            { answerText: '<script href="xxx.js">', isCorrect: false },
            { answerText: '<script src="xxx.js">', isCorrect: true },
        ]
    },

    {
        questionText: 'The external JavaScript file must contain the <script> tag.',
        answerOption: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
        ]
    },

    {
        questionText: 'How do you write "Hello World" in an alert box?',
        answerOption: [
            { answerText: 'msg("Hello World");', isCorrect: false },
            { answerText: 'alert("Hello World");', isCorrect: true },
            { answerText: 'msgBox("Hello World");', isCorrect: false },
            { answerText: 'alertBox("Hello World");', isCorrect: false },
        ]
    },

    {
        questionText: 'How do you create a function in JavaScript?',
        answerOption: [
            { answerText: 'function:myFunction()', isCorrect: false },
            { answerText: 'function myFunction()', isCorrect: true },
            { answerText: 'function = myFunction()', isCorrect: false },
        ]
    },

    {
        questionText: 'How do you call a function named "myFunction"?',
        answerOption: [
            { answerText: 'call myFunction()', isCorrect: false },
            { answerText: 'myFunction()', isCorrect: true },
            { answerText: 'call function myFunction()', isCorrect: false },
        ]
    },

    {
        questionText: 'How to write an IF statement in JavaScript?',
        answerOption: [
            { answerText: 'if i = 5 then', isCorrect: false },
            { answerText: 'if i = 5', isCorrect: false },
            { answerText: 'if (i == 5)', isCorrect: true },
            { answerText: 'if i == 5 then', isCorrect: false },
        ]
    },

    {
        questionText: 'How does a FOR loop start?',
        answerOption: [
            { answerText: 'for (i <= 5; i++)', isCorrect: false },
            { answerText: 'for i = 1 to 5', isCorrect: false },
            { answerText: 'for (i = 0; i <= 5)', isCorrect: false },
            { answerText: 'for (i = 0; i <= 5; i++)', isCorrect: true },
        ]
    },

    {
        questionText: 'What is the correct way to write a JavaScript array?',
        answerOption: [
            { answerText: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', isCorrect: false },
            { answerText: 'var colors = "red", "green", "blue"', isCorrect: false },
            { answerText: 'var colors = (1:"red", 2:"green", 3:"blue")', isCorrect: false },
            { answerText: 'var colors = ["red", "green", "blue"]', isCorrect: true },
        ]
    },
]