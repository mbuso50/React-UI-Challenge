import type { ReactNode } from 'react';
import './components.css';

interface SectionProps {
    children: ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
    containerClass?: string;
}

const Section = ({
    children,
    title,
    subtitle,
    className = '',
    containerClass = ''
}: SectionProps) => {
    return (
        <section className={`section ${className}`}>
            <div className={`section-container ${containerClass}`}>
                {(title || subtitle) && (
                    <div className="section-header">
                        {subtitle && <h4 className="section-subtitle">{subtitle}</h4>}
                        {title && <h2 className="section-title">{title}</h2>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;