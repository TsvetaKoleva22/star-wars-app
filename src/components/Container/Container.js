import './Container.scss';

const Container = ({
    className,
    children
}) => (
    <div className={className ? `${className} container` : 'container'}>
        {children}
    </div>
);

export default Container;
