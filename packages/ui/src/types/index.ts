export interface BaseComponentProps {
  className?: string;
  id?: string;
  'data-testid'?: string;
}

export interface ButtonProps extends BaseComponentProps {
  children: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export interface CardProps extends BaseComponentProps {
  children: string;
  title?: string;
  subtitle?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export interface InputProps extends BaseComponentProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  required?: boolean;
  disabled?: boolean;
}
