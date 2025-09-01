import { CardProps } from '../types';

export class Card {
  private props: CardProps;

  constructor(props: CardProps) {
    this.props = props;
  }

  render(): string {
    const { children, title, subtitle, padding = 'md', className = '', id = '' } = this.props;
    
    const baseClasses = 'card';
    const paddingClasses = {
      sm: 'card-padding-sm',
      sx: 'card-padding-sx',
      md: 'card-padding-md',
      lg: 'card-padding-lg'
    };

    const classes = [
      baseClasses,
      paddingClasses[padding],
      className
    ].filter(Boolean).join(' ');

    return `<div class="${classes}" ${id ? `id="${id}"` : ''}>
      ${title ? `<h3 class="card-title">${title}</h3>` : ''}
      ${subtitle ? `<p class="card-subtitle">${subtitle}</p>` : ''}
      <div class="card-content">
        ${children}
      </div>
    </div>`;
  }

  static create(props: CardProps): Card {
    return new Card(props);
  }
}
