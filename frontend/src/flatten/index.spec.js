const flatten = require('./index').flatten;
const test = require('tape');

test('[flatten]: It flattens and deeply nested Array.', (t) => {

    const nestedArray = ['hello', [
            'is', [
                'it'
            ]
        ],
        [
            [
                ['me'], 'youre'
            ],
            [
                [
                    [
                        ['looking']
                    ]
                ]
            ], 'for'
        ]
    ];
    const expectation = ['hello', 'is', 'it', 'me', 'youre', 'looking', 'for'];
    const result = flatten(nestedArray);
    t.deepEqual(result, expectation, 'It successfully flattened the Array');
    t.end()
});

test('[flatten]: It returns a non Array unmodified.', (t) => {
    const nonArrayObject = {
        hello: 'world'
    };
    const result = flatten(nonArrayObject);
    t.deepEqual(nonArrayObject, nonArrayObject, 'It did nothing! Thats good apparently? 🤔');
    t.end()
});
