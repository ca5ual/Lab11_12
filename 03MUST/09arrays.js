const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: [
            'Intelligent',
            'Active',
            'Alert',
            'Faithful',
            'Trainable',
            'Instunctual',
        ],
    },
{
    id: 'dog-2',
    name: 'Bernese Mountain Dog',
    temperament: [
        'Affectionate',
        'Intelligent',
        'Loyal',
        'Faithful'
    ],
},

{
    id: 'dog-3',
    name: 'Labrador Retriever',
    temperament: [
        'Intelligent',
        'Even Tempered',
        'Kind',
        'Agile',
        'Outgoing',
        'Trusting',
        'Gentle',
    ],
},
{
    id: 'dog-4',
    name: 'York',
    temperament: [ 
    'Intelligent',
    'Agressive',
    'Dump',
    'Friendly',
    'Gentle',
    ],
},

{
    id: 'dog-5',
    name: 'Doberman',
    temperament: [
        'Kind',
        'Introvert',
        'Agile',
        'Dangerous',
        'Trusting',
        'Smart',
    ],
},
]

console.log (dogs.find (dog => dog.name === 'Bernese Mountain Dog'));
console.log (dogs.some (dog => dog.temperament.includes('Agressive')));
console.log (dogs.some (dog => dog.temperament.includes('Trusting')));
console.log (dogs.every (dog => dog.temperament.includes('Trusting')));
console.log (dogs.every (dog => dog.temperament.includes('Intelligent')));
console.log (dogs.map(dog => dog.name));
console.log (dogs.filter (dog => dog.temperament.includes('Faithful')));
console.log (dogs.reduce ((allTemperaments, dog) => {
    return [...allTemperaments, ...dog.temperament]
},[]));

//zadanie
console.log (dogs.find (dog => dog.name === 'Doberman'));
console.log (dogs.filter (dog => dog.temperament.includes ('Dump')));
console.log (dogs.some (dog => dog.temperament.includes ('Smart')));