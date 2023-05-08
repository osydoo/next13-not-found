import _axios from 'axios';
import Content from './content';

/**
 * @log interceptors error Uncaught (in promise) Error: NEXT_NOT_FOUND 
 * @action <button> click
 ** Unhandled Runtime Error
 ** Error: NEXT_NOT_FOUND
 **   24 |         }catch(e){
 **   25 |             console.log('error')
 ** > 26 |             notFound();
 **      |                    ^
 **   27 |         }
 **   28 | }
 **   29 | 
 */
const EventNotFound = () => {
    return (
        <div>
            <Content />
        </div>
    )
}

export default EventNotFound;