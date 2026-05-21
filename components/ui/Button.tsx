import {forwardRef} from 'react';
import {Link} from '@/i18n/navigation';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900 focus-visible:ring-gold-400 disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-gold-500 text-forest-950 hover:bg-gold-400 active:bg-gold-600 shadow-[0_8px_24px_-12px_rgba(201,169,97,0.6)]',
  secondary:
    'border border-cream-50/30 text-cream-50 hover:border-cream-50 hover:bg-cream-50/5',
  ghost: 'text-cream-100 hover:text-gold-400',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({variant = 'primary', size = 'md', className = '', children, ...rest}, ref) => (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  ),
);
Button.displayName = 'Button';

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
};

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  external,
  children,
}: LinkButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
