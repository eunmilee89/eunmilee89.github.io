export interface TerminalSample {
  call: string;
  result: string;
}

export const TERMINAL_SAMPLES: TerminalSample[] = [
  { call: 'solve("aBcDeFg")', result: '"AbCdEfG"' },
  { call: "twoSum([2, 7, 11, 15], 9)", result: "[0, 1]" },
  { call: "bfs(graph, 1)", result: "[1, 2, 3, 4, 5]" },
];
