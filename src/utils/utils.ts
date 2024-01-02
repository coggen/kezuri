export function optional(property, argument) {
  return (argument ? ` ${property}="${argument}"` : '')
}