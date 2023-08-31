import { Container, Row, Col } from 'react-bootstrap';

/**
 * A container component that wraps the form content.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The form content.
 * @returns {ReactNode} The wrapped form content.
 */
const FormContainer = ({ children }) => {
    return (
        <Container>
            <Row className='justify-content-md-center mt-5'>
                <Col xs={12} md={6} className='card p-5'>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default FormContainer;