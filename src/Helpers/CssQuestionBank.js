export const Questions = [
    {
        questionText: 'What does CSS stand for ?',
        answerOption: [
            { answerText: 'Colorful Style Sheets', isCorrect: false },
            { answerText: 'Computer Style Sheets', isCorrect: false },
            { answerText: 'Cascading Style Sheets', isCorrect: true },
            { answerText: 'Creative Style Sheets', isCorrect: false },
        ]
    },

    {
        questionText: 'What is the correct HTML for referring to an external style sheet?',
        answerOption: [
            { answerText: '<stylesheet>mystyle.css</stylesheet>', isCorrect: false },
            { answerText: '<link rel="stylesheet" type="text/css" href="mystyle.css">', isCorrect: true },
            { answerText: '<.style src="mystyle.css">', isCorrect: false },
        ]
    },

    {
        questionText: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        answerOption: [
            { answerText: 'In the <body> section', isCorrect: false },
            { answerText: 'In the <head> section', isCorrect: true },
            { answerText: 'At the end of the document', isCorrect: false },
        ]
    },

    {
        questionText: 'Which HTML tag is used to define an internal style sheet?',
        answerOption: [
            { answerText: '<script>', isCorrect: false },
            { answerText: '<style>', isCorrect: true },
            { answerText: '<css>', isCorrect: false },
        ]
    },

    {
        questionText: 'Which HTML attribute is used to define inline styles?',
        answerOption: [
            { answerText: 'styles', isCorrect: false },
            { answerText: 'class', isCorrect: false },
            { answerText: 'font', isCorrect: false },
            { answerText: 'style', isCorrect: true },
        ]
    },

    {
        questionText: 'Which is the correct CSS syntax?',
        answerOption: [
            { answerText: 'body {color: black;}', isCorrect: true },
            { answerText: 'body:color=black;', isCorrect: false },
            { answerText: '{body:color=black;}', isCorrect: false },
            { answerText: '{body;color:black;}', isCorrect: false },
        ]
    },

    {
        questionText: 'How do you insert a comment in a CSS file?',
        answerOption: [
            { answerText: '// this is a comment', isCorrect: false },
            { answerText: '/* this is a comment */', isCorrect: true },
            { answerText: 'this is a comment', isCorrect: false },
            { answerText: '// this is a comment //', isCorrect: false },
        ]
    },

    {
        questionText: 'Which property is used to change the background color?',
        answerOption: [
            { answerText: 'color', isCorrect: false },
            { answerText: 'bgcolor', isCorrect: false },
            { answerText: 'background-color', isCorrect: true },
        ]
    },

    {
        questionText: 'How do you add a background color for all <.h1> elements?',
        answerOption: [
            { answerText: 'h1 {background-color:#FFFFFF;}', isCorrect: true },
            { answerText: 'all.h1 {background-color:#FFFFFF;}', isCorrect: false },
            { answerText: 'h1.all {background-color:#FFFFFF;}', isCorrect: false },
        ]
    },

    {
        questionText: 'Which CSS property is used to change the text color of an element?',
        answerOption: [
            { answerText: 'color', isCorrect: true },
            { answerText: 'fgcolor', isCorrect: false },
            { answerText: 'text-color', isCorrect: false },
        ]
    },
]