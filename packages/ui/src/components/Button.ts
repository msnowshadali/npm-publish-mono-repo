import { ButtonProps } from '../types';

export class Button {
  private props: ButtonProps;

  constructor(props: ButtonProps) {
    this.props = props;
  }

  render(): string {
    const { children, variant = 'primary', size = 'md', disabled = false, className = '', id = '' } = this.props;
    
    const baseClasses = 'btn';
    const variantClasses = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline'
    };
    const sizeClasses = {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg'
    };

    const classes = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      disabled ? 'btn-disabled' : '',
      className
    ].filter(Boolean).join(' ');

    return `<button class="${classes}" ${disabled ? 'disabled' : ''} ${id ? `id="${id}"` : ''}>
      ${children}
    </button>`;
  }

  static create(props: ButtonProps): Button {
    return new Button(props);
  }
}
