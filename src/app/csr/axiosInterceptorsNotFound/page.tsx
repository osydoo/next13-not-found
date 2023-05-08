import _axios from 'axios';
import Content from './content';

/**
 * @log interceptors error
 * @returns Next Error
 * Unhandled Runtime Error
 * Error: NEXT_NOT_FOUND
 *   27 |         }catch(e){
 *   28 |             console.log('error')
 * > 26 |             notFound();
 *      |                    ^
 *   29 |         }
 *   30 | }
 *   31 | 
 */
const AxiosInterceptorsNotFound = () => {
    return (
        <div>
            <Content />
        </div>
    )
}

export default AxiosInterceptorsNotFound;