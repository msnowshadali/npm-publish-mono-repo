import { Button } from './Button';

describe('Button', () => {
  it('should create a button with default props', () => {
    const button = Button.create({
      children: 'Click me'
    });
    
    const html = button.render();
    expect(html).toContain('Click me');
    expect(html).toContain('btn-primary');
    expect(html).toContain('btn-md');
  });

  it('should create a button with custom variant and size', () => {
    const button = Button.create({
      children: 'Submit',
      variant: 'secondary',
      size: 'lg'
    });
    
    const html = button.render();
    expect(html).toContain('btn-secondary');
    expect(html).toContain('btn-lg');
  });

  it('should create a disabled button', () => {
    const button = Button.create({
      children: 'Disabled',
      disabled: true
    });
    
    const html = button.render();
    expect(html).toContain('btn-disabled');
    expect(html).toContain('disabled');
  });
});
