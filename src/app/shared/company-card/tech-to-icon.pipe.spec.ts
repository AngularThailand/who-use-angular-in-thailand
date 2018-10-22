import { TechToIconPipe } from './tech-to-icon.pipe';

describe('TechToIconPipe', () => {
  const pipe = new TechToIconPipe();
  it('should return svg path if does include in the technologies list', () => {
    expect(pipe.transform('angular')).toContain('assets/images');
  });
  it('should return empty string if tech does not include in the technologies list', () => {
    expect(pipe.transform('react')).toBe('');
  });
});
