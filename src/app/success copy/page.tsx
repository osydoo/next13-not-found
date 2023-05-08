import axios from 'axios';
import { notFound } from 'next/navigation';

// Rendering NotFound Page
const Success = async () => {
    try{
        await axios.get('http://127.0.0.1:3001/error'); // 404 error
        console.log('success'); // not working
    }catch(e){
        console.log('error')
        notFound()
    }

    return (
        <div>
            Success Page
        </div>
    )
}

export default Success;