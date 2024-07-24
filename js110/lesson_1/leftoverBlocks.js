/*
A. Understand the Problem:

- How is a cube represented in code?
- How many blocks from a lower layer can it support in the upper layer?

Input: integer for a specific amount of cubes
Output: integer for left over cubes after building the tallest possible valid structure

Explicit Rules:

-Structures are built with blocks
  Blocks are cubes
  Cubes are six-sided, have square faces, and have equal lengths on all sides
-The top layer in the structure consists of a single block
-A block in an upper layer must be supported by four blocks in a lower layer
-A block in a lower layer can support more than one block in an upper layer
-Layers are solid structures -- there are no gaps between blocks in a layer

Implicit Rules:

Layer number correlates with blocks in a layer.
  - Layer number x Layer number equals total number of blocks in a layer
    Layer 1: 1 block (1x1)
    Layer 2: 4 blocks (2x2)
    Layer 3: 9 blocks (3x3)

B.  Examples and Test Cases

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

The above test cases says that there will not always be left-over blocks
The lower layers do not need more blocks that is required.  This is based on 
console.log(calculateLeftoverBlocks(6) === 1); //true

C.  Data Structures
Perhaps use a nested array to represent the structure?
[
  ['x'],
  ['x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ...
]

D.  Algorithm

1. Start with:
    - A count of the 'blocks remaining' equal to the input
    - A count of the 'current layer' equal to 0

2. Calculate the number for the 'next layer' by adding 1 to
   the value for the 'current layer'

3. Using the number for the 'next layer', calculate the
   'blocks required' to build that layer, by multiplying the
   number by itself

4. Determine if the 'blocks remaining' is greater than or
   equal to the 'blocks required' to build the layer
    - If it is:
      - Subtract the 'blocks required' from 'blocks remaining'
      - Increment the 'current layer' by 1
      - Go back to Step 2
    - If it isn't:
      - Return 'blocks remaining'

*/

function calculateLeftoverBlocks(blocksRemaining) {
  let currentLayer = 0;
  let blocksRequired = (currentLayer + 1) ** 2;

  while (blocksRemaining >= blocksRequired) {
    blocksRemaining -= blocksRequired;
    currentLayer += 1;
    blocksRequired = (currentLayer + 1) ** 2;
    console.log({ blocksRemaining, currentLayer, blocksRequired });
  }
  return blocksRemaining;
}

// console.log(calculateLeftoverBlocks(0) === 0); //true
// console.log(calculateLeftoverBlocks(1) === 0); //true
// console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
