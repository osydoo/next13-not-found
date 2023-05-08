import _axios from 'axios';
import { notFound } from 'next/navigation';

const axios = _axios.create();
axios.interceptors.response.use(
    function(res){
        return res
    },
    function(err){
        if(err){
            console.log('interceptors')
            notFound();
        }
    }
)
/**
 * @server_log success interceptors
 * error - node_modules\next\dist\client\components\not-found.js (26:18) @ notFound
 * error - unhandledRejection: Error: NEXT_NOT_FOUND
 *   at notFound (webpack-internal:///(sc_server)/./node_modules/next/dist/client/components/not-found.js:23:19)
 *   at eval (webpack-internal:///(sc_server)/./src/app/ssr/axiosInterceptors/page.tsx:20:66)
 *   at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
 * digest: 'NEXT_NOT_FOUND'
 * }
 * @returns Rendering Page
 */
const SyncAxiosInterceptors = () => {
    try{
        axios.get('http://127.0.0.1:3001/error'); // 404 error
        console.log('success');
    }catch(e){
        console.log('error');
    }

    return (
        <div>
            Rendering Page
        </div>
    )
}

export default SyncAxiosInterceptors;