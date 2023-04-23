import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  squares: any[];
  xIsNext: boolean;
  winner: string | null;

  constructor() {
    this.squares = [];
    this.xIsNext = true;
    this.winner = null;
  }

  ngOnInit() {
    this.newGame;
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(i: number) {
    if (!this.squares[i]) {
      this.squares.splice(i, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < combos.length; i++) {
      const [a, b, c] = combos[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[b] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
