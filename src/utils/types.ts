export type SquareProps = {
    value: string | null;
    onSquareClick: () => void;
  }


export type BoardProps = {
    xIsNext: boolean;
    squares: (string | null)[];
    onPlay: (squares: (string | null)[]) => void;
  }



export type Moves = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type BoardResult = {
    winner: SquareProps["value"];
    direction?: "V" | "H" | "D";
    column?: 1 | 2 | 3;
    row?: 1 | 2 | 3;
    diagonal?: 'Main' | 'Counter';
}