'use client'
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
            notFound(); // not working
        }
    }
)

const Content = () => {

    const handleClick = async () => {
            try{
                await axios.get('http://127.0.0.1:3001/error'); // 404 error
                console.log('success');
            }catch(e){
                console.log('error')
                notFound();
            }
    }

    return (
        <div>
            <button onClick={handleClick}>
                button
            </button>
        </div>
    )
}

export default Content;