import _axios from 'axios';
import Content from './Content';

/**
 * @log interceptors error
 * @returns 404 Page
 */
const UseEffectNotFound = async () => {
    return (
        <div>
            <Content />
        </div>
    )
}

export default UseEffectNotFound;