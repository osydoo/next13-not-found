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
            notFound();
        }
    }
)

const Content = () => {

    const handleClick = () => {
            try{
                axios.get('http://127.0.0.1:3001/error'); // 404 error
                console.log('success');
                notFound(); // not working?
            }catch(e){
                console.log('error');
                notFound(); // not working?
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