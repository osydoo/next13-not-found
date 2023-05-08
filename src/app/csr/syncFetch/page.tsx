import _axios from 'axios';
import Content from './content';

/**
 * @log success error interceptors Uncaught (in promise) Error: NEXT_NOT_FOUND 
 * @action <button> click
 * Unhandled Runtime Error
 * Error: NEXT_NOT_FOUND
 *   11 |     if(err){
 *   12 |         console.log('interceptors')
 * > 13 |         notFound();
 *      |                ^
 *   14 |     }
 *   15 | }
 *   16 | )
 */
const SyncFetch = () => {
    return (
        <div>
            <Content />
        </div>
    )
}

export default SyncFetch;