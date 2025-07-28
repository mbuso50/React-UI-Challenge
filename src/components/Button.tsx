
import type { ReactNode, MouseEvent } from 'react';
import './components.css';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;

}

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    className = '',
    ...props
}: ButtonProps) => {
    const buttonClass = `btn btn-${variant} btn-${size} ${className}`;

    return (
        <button className={buttonClass} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;