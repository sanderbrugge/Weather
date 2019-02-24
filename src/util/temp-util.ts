export const average = (items: number[]) => round(items.reduce(( accum, item ) => accum + item, 0 ) / items.length);

const round = (item: number) => Math.round(item * 100) / 100