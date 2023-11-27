import { optional } from './utils';

describe('optional', () => {
  it('returns empty string if the property value is empty', () => {
    expect(optional('prop', null)).toBe("");
    expect(optional('prop', "")).toBe("");
    expect(optional('prop', undefined)).toBe("");
    expect(optional('prop', false)).toBe("");
  });

  it('returns an HTML attribute string, prefixed by a space, if the property value is defined', () => {
    expect(optional('prop', 'val')).toBe(' prop="val"');
  });
});