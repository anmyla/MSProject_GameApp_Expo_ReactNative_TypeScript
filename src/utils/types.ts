export type SquareProps = {
    value: string | null;
    onSquareClick: () => void;
    highlight? : boolean;
  }

export type BoardProps = {
    disabled? : boolean;
    state: BoardState;
    onPlay: (square: number) => void;
    size?: number;
    gameResult?: BoardResult | false;
    loading?: Moves | false;
}

export type Square = string | null;

export type BoardState = Square[];

export type Moves = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type BoardResult = {
    winner: SquareProps["value"];
    direction?: "V" | "H" | "D";
    column?: 1 | 2 | 3;
    row?: 1 | 2 | 3;
    diagonal?: 'Main' | 'Counter';
    line?: number[];
}
