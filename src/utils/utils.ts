// export function format(first: string, middle: string, last: string): string {
//   return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
// }

export function optional(property, argument) {
  return (argument ? ` ${property}="${argument}"` : '')
}