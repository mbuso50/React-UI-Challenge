import type { ReactNode, AnchorHTMLAttributes } from 'react';
import './components.css';

type LinkVariant = 'default' | 'nav';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    href: string;
    variant?: LinkVariant;
    className?: string;
}

const Link = ({
    children,
    href,
    variant = 'default',
    className = '',
    ...props
}: LinkProps) => {
    const linkClass = `link link-${variant} ${className}`;

    return (
        <a href={href} className={linkClass} {...props}>
            {children}
        </a>
    );
};

export default Link;