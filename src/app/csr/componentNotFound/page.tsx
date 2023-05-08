import _axios from 'axios';
import Content from './content';

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