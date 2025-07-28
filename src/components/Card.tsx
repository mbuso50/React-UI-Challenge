import type { ReactNode } from 'react';
import Button from './Button';
import './components.css';

type CardVariant = 'default' | 'mobile';

interface CardProps {
    title: string;
    description: string;
    price: string;
    imageUrl?: string;
    variant?: CardVariant;
    className?: string;
    children?: ReactNode;
}

const Card = ({
    title,
    description,
    price,
    imageUrl,
    variant = 'default',
    className = ''
}: CardProps) => {
    return (
        <div className={`card card-${variant} ${className}`}>
            {imageUrl && (
                <div className="card-image-container">
                    <img src={imageUrl} alt={title} className="card-image" />
                </div>
            )}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <div className="card-footer">
                    <span className="card-price">{price}</span>
                    <Button variant="primary" size="small">Add to Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default Card;