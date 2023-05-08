import axios from 'axios';
import { notFound } from 'next/navigation';

/**
 * @log error
 * @returns 404 PAGE
 */
const SSR = async () => {
    try{
        await axios.get('http://127.0.0.1:3001/error'); // 404 error
        console.log('success');
    }catch(e){
        console.log('error')
        notFound()
    }

    return (
        <div>
            Rendering Page
        </div>
    )
}

export default SSR;