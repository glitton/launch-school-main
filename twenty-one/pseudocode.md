# Start best of 3 round

- Initialize player and dealer scores to zero
- set round to 0

## Initialize round loop

- Initialize card deck
- Display round and scores
- Deal cards to player and dealer

- Player turn: hit or stay

  - Ask player to hit or stay
    if stay break to compare cards step
  - if hit, ask player until stay or bust
  - If player busts, dealer win.
    - Update dealer score, add 1
    - Check score: Is player or dealer score equal to 3?
      - Yes:
        - Display final scores
        - end game or go to next round
      - No: Update round +=1
        - Check: Is round === 5
          - Yes: Play Again?
          - No, go to initalize round loop

- Dealer turn: hit or stay
  - repeat until total >= 17
  - If dealer busts, player wins
    - Update player score, add 1
    - Check score: Is player or dealer score === 3
    - Yes:
      - Display final scores
      - end game or go to next round
      - No: Update round +=1
      - Check: Is round === 5
        - Yes: Play Again?
        - No, go to initalize round loop

# No Busts: Compare cards, declare winner.

- Check score: Is player or dealer score === 3

  - Yes:
    - Display final scores
    - end game or go to next round
    - No: Update round +=1
    - Check: Is round === 5
      - Yes: Play Again?
      - No, go to initalize round loop

- End game: Display scores
- #: End best of 3 loop: Ask to play another best of 3
