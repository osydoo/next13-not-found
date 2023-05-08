# **NotFound Case Test in Next13**
## **Directory and Case**
|page|subPage|notFound() working point|success|etc|
|---|---|---|---|---|
|CSR|root|rendering component|:o:||
||useEffect1|useEffect|:x:|useEffect dependency []|
||useEffect2|useEffect triggered useState|:o:|useEffect dependency [data]|
||axiosInterceptors|axios in try catch|:x:|axios.interceptors notFound() not working and throw error in try catch|
||syncFetch|axios.interceptors|:x:|This case only working notFound() in axios interceptors|
||event|click event|:x:||
|SSR|root|rendering component|:o:||
||axiosInterceptors|rendering component|:o:|axios.interceptors notFound() not working|
||syncAxiosInterceptors||:o:||

## env
- next 13
- axios
