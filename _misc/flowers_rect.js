'use strict';
/*

We are writing an application for calculating garden scores in this year's garden contest. All gardens have a rectangular shape. Within a garden, all rows have the same number of cells.

This year's committee decided to use the following criteria for scoring gardens:
- Identify the largest square block of the same flower.
- Add 1 point for every cell in that block.

Example:
______________________________________________________
| Iris | Iris | Iris  | Iris  | Iris  | Iris  | Iris |
------------------------------------------------------
| Iris | Iris | *Rose | *Rose | *Rose | *Rose | Lily |
------------------------------------------------------
| Iris | Iris | *Rose | *Rose | *Rose | *Rose | Lily |
------------------------------------------------------
| Iris | Iris | *Rose | *Rose | *Rose | *Rose | Lily |
------------------------------------------------------
| Iris | Iris | *Rose | *Rose | *Rose | *Rose | Lily |
------------------------------------------------------
| Iris | Iris | Sage  | Sage  | Sage  | Sage  | Lily |
------------------------------------------------------

The largest square block of the same flower (Rose) has 16 cells, so the above garden's score is 16.

Write a function that accepts a garden and returns the total score.


Test cases:
garden_1 = [
    ["Iris", "Iris", "Iris", "Iris", "Iris", "Iris", "Iris"],
    ["Iris", "Iris", "Rose", "Rose", "Rose", "Rose", "Lily"],
    ["Iris", "Iris", "Rose", "Rose", "Rose", "Rose", "Lily"],
    ["Iris", "Iris", "Rose", "Rose", "Rose", "Rose", "Lily"],
    ["Iris", "Iris", "Rose", "Rose", "Rose", "Rose", "Lily"],
    ["Iris", "Iris", "Sage", "Sage", "Sage", "Sage", "Lily"]
]

hash = {

}

garden_2 = [
    ["Larch", "Holly", "Holly", "Heath", "Holly", "Heath"],
    ["Heath", "Pansy", "Holly", "Pansy", "Aspen", "Aspen"],
    ["Pansy", "Pansy", "Larch", "Lilac", "Aspen", "Lilac"],
    ["Hazel", "Lilac", "Basil", "Lilac", "Lilac", "Larch"],
    ["Peony", "Hazel", "Basil", "Hazel", "Holly", "Basil"]
]

garden_3 = [
    ["Arum", "Dock", "Iris", "Lily", "Reed", "Rose", "Sage", "Woad"]
]

garden_4 = [
    ["Arum"],
    ["Dock"],
    ["Iris"],
    ["Lily"],
    ["Reed"],
    ["Rose"],
    ["Sage"],
    ["Woad"]
]

garden_5 = [
    ["Peony"]
]

garden_6 = [
    ["Ivy"  , "Rue"  , "Yew"  , "Arum" , "Dock" ],
    ["Iris" , "Lily" , "Reed" , "Rose" , "Sage" ],
    ["Woad" , "Aspen", "Basil", "Hazel", "Heath"],
    ["Holly", "Larch", "Lilac", "Pansy", "Peony"],
]

garden_7 = [
    ["Rose", "Rose", "Rose", "Rose", "Rose"],
    ["Rose", "Rose", "Rose", "Rose", "Rose"],
    ["Rose", "Rose", "Rose", "Rose", "Rose"],
    ["Rose", "Rose", "Rose", "Rose", "Rose"],
    ["Rose", "Rose", "Rose", "Rose", "Rose"]
]

garden_8 = [
    ["Iris", "Iris", "Iris"],
    ["Iris", "Iris", "Iris"],
    ["Iris", "Iris", "Rose"]
]

garden_9 = [
	["Iris", "Iris", "Rose", "Rose", "Iris", "Iris", "Iris"],
	["Iris", "Iris", "Rose", "Rose", "Rose", "Rose", "Lily"],
	["Iris", "Iris", "Rose", "Rose", "Rose", "Rose", "Lily"],
	["Iris", "Iris", "Rose", "Rose", "Rose", "Rose", "Lily"],
	["Iris", "Iris", "Rose", "Rose", "Rose", "Rose", "Lily"],
	["Iris", "Iris", "Sage", "Sage", "Sage", "Sage", "Lily"]
]

garden_10 = [
	["Iris", "Iris", "Iris", "Iris", "Iris", "Iris", "Iris"],
	["Iris", "Iris", "Rose", "Rose", "Rose", "Rose", "Rose"],
	["Iris", "Iris", "Rose", "Rose", "Rose", "Rose", "Lily"],
	["Iris", "Iris", "Rose", "Rose", "Rose", "Rose", "Lily"],
	["Iris", "Iris", "Rose", "Rose", "Rose", "Rose", "Lily"],
	["Iris", "Iris", "Sage", "Sage", "Sage", "Sage", "Lily"]
]

garden_11 = [
	["Iris", "Iris", "Iris"],
	["Iris", "Iris", "Iris"],
	["Lily", "Iris", "Iris"]
]

calc_score(garden_1)       => 16
calc_score(garden_2)       => 1
calc_score(garden_3)       => 1
calc_score(garden_4)       => 1
calc_score(garden_5)       => 1
calc_score(garden_6)       => 1
calc_score(garden_7)       => 25
calc_score(garden_8)       => 4
calc_score(garden_9)       => 16
calc_score(garden_10)      => 16
calc_score(garden_11)      => 4

Complexity variables:
r - the number of rows in the input garden
c - the number of cols in the input garden

*/

const garden_1 = [
  ['Iris', 'Iris', 'Iris', 'Iris', 'Iris', 'Iris', 'Iris'],
  ['Iris', 'Iris', 'Rose', 'Rose', 'Rose', 'Rose', 'Lily'],
  ['Iris', 'Iris', 'Rose', 'Rose', 'Rose', 'Rose', 'Lily'],
  ['Iris', 'Iris', 'Rose', 'Rose', 'Rose', 'Rose', 'Lily'],
  ['Iris', 'Iris', 'Rose', 'Rose', 'Rose', 'Rose', 'Lily'],
  ['Iris', 'Iris', 'Sage', 'Sage', 'Sage', 'Sage', 'Lily'],
];

const garden_2 = [
  ['Larch', 'Holly', 'Holly', 'Heath', 'Holly', 'Heath'],
  ['Heath', 'Pansy', 'Holly', 'Pansy', 'Aspen', 'Aspen'],
  ['Pansy', 'Pansy', 'Larch', 'Lilac', 'Aspen', 'Lilac'],
  ['Hazel', 'Lilac', 'Basil', 'Lilac', 'Lilac', 'Larch'],
  ['Peony', 'Hazel', 'Basil', 'Hazel', 'Holly', 'Basil'],
];

const garden_3 = [['Arum', 'Dock', 'Iris', 'Lily', 'Reed', 'Rose', 'Sage', 'Woad']];

const garden_4 = [['Arum'], ['Dock'], ['Iris'], ['Lily'], ['Reed'], ['Rose'], ['Sage'], ['Woad']];

const garden_5 = [['Peony']];

const garden_6 = [
  ['Ivy', 'Rue', 'Yew', 'Arum', 'Dock'],
  ['Iris', 'Lily', 'Reed', 'Rose', 'Sage'],
  ['Woad', 'Aspen', 'Basil', 'Hazel', 'Heath'],
  ['Holly', 'Larch', 'Lilac', 'Pansy', 'Peony'],
];

const garden_7 = [
  ['Rose', 'Rose', 'Rose', 'Rose', 'Rose'],
  ['Rose', 'Rose', 'Rose', 'Rose', 'Rose'],
  ['Rose', 'Rose', 'Rose', 'Rose', 'Rose'],
  ['Rose', 'Rose', 'Rose', 'Rose', 'Rose'],
  ['Rose', 'Rose', 'Rose', 'Rose', 'Rose'],
];

const garden_8 = [
  ['Iris', 'Iris', 'Iris'],
  ['Iris', 'Iris', 'Iris'],
  ['Iris', 'Iris', 'Rose'],
];

const garden_9 = [
  ['Iris', 'Iris', 'Rose', 'Rose', 'Iris', 'Iris', 'Iris'],
  ['Iris', 'Iris', 'Rose', 'Rose', 'Rose', 'Rose', 'Lily'],
  ['Iris', 'Iris', 'Rose', 'Rose', 'Rose', 'Rose', 'Lily'],
  ['Iris', 'Iris', 'Rose', 'Rose', 'Rose', 'Rose', 'Lily'],
  ['Iris', 'Iris', 'Rose', 'Rose', 'Rose', 'Rose', 'Lily'],
  ['Iris', 'Iris', 'Sage', 'Sage', 'Sage', 'Sage', 'Lily'],
];

const garden_10 = [
  ['Iris', 'Iris', 'Iris', 'Iris', 'Iris', 'Iris', 'Iris'],
  ['Iris', 'Iris', 'Rose', 'Rose', 'Rose', 'Rose', 'Rose'],
  ['Iris', 'Iris', 'Rose', 'Rose', 'Rose', 'Rose', 'Lily'],
  ['Iris', 'Iris', 'Rose', 'Rose', 'Rose', 'Rose', 'Lily'],
  ['Iris', 'Iris', 'Rose', 'Rose', 'Rose', 'Rose', 'Lily'],
  ['Iris', 'Iris', 'Sage', 'Sage', 'Sage', 'Sage', 'Lily'],
];

const garden_11 = [
  ['Iris', 'Iris', 'Iris'],
  ['Iris', 'Iris', 'Iris'],
  ['Lily', 'Iris', 'Iris'],
];

// calc_score(garden_1)       => 16

function calc_score(garden) {
  const hash = {};

  for (let i = 0; i < garden.length; i++) {
    for (let j = 0; j < garden[i].length; ++j) {}
  }
}

calc_score(garden_1);

function max_distance(garden) {
  const hash = {};
  let largestDistance = -1;
  let flower = undefined;

  for (let i = 0; i <= garden.length; ++i) {
    let key = garden[i];
    if (!hash[key]) {
      hash[key] = {
        first: i,
        last: i,
      };
    } else {
      hash[key].last = i;
      let distance = hash[key].last - hash[key].first;
      hash[key].distance = distance;
      if (distance > largestDistance) {
        flower = key;
        largestDistance = distance;
      }
    }

    // console.log(hash);
  }

  return largestDistance;
}

// console.log(max_distance(garden_1));
// console.log(max_distance(garden_2));
// console.log(max_distance(garden_3));
// console.log(max_distance(garden_4));
// console.log(max_distance(garden_5));
// console.log(max_distance(garden_6));
// console.log(max_distance(garden_7));
