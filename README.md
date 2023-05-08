# **NotFound Case Test in Next13**
## **Directory and Case**
|page|subPage|notFound() working point|working|etc|
|---|---|---|---|---|
|CSR|root|rendering component|:heavy_check_mark:||
||useEffect1|useEffect|:x:|useEffect dependency []|
||useEffect2|useEffect triggered useState|:heavy_check_mark:|useEffect dependency [data]|
||axiosInterceptors|axios in try catch|:x:|axios.interceptors notFound() not working and throw error in try catch|
||syncFetch|axios.interceptors|:x:|This case only working notFound() in axios interceptors|
||event|click event|:x:||
|SSR|root|rendering component|:heavy_check_mark:||
||axiosInterceptors|rendering component|:heavy_check_mark:|axios.interceptors notFound() not working|
||syncAxiosInterceptors||:heavy_check_mark:||

## env
- next 13
- axios
