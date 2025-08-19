import { InputProps } from '../types';

export class Input {
  private props: InputProps;

  constructor(props: InputProps) {
    this.props = props;
  }

  render(): string {
    const { 
      placeholder = '', 
      value = '', 
      type = 'text', 
      required = false, 
      disabled = false, 
      className = '', 
      id = '' 
    } = this.props;
    
    const baseClasses = 'input';
    const classes = [
      baseClasses,
      className
    ].filter(Boolean).join(' ');

    return `<input 
      type="${type}" 
      class="${classes}" 
      placeholder="${placeholder}" 
      value="${value}" 
      ${required ? 'required' : ''} 
      ${disabled ? 'disabled' : ''} 
      ${id ? `id="${id}"` : ''}
    />`;
  }

  static create(props: InputProps): Input {
    return new Input(props);
  }
}
