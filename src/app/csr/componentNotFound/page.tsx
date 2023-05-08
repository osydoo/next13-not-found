import _axios from 'axios';
import Content from './Content';

/**
 * @log interceptors error
 * @returns 404 Page
 */
const ComponentNotFound = () => {
    return (
        <div>
            <Content />
        </div>
    )
}

export default ComponentNotFound;