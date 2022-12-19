import Header from '../../components/Header';
import Container from '../../components/Container';

import './NotFoundPage.scss';

const NotFoundPage = () => (
    <div className="not-found-page">
        <Header />
        <Container className="not-found-page__container">
            <h1>404</h1>
            <h2>Page Not Found HERE</h2>
        </Container>
    </div>
    
);

export default NotFoundPage;
