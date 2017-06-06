
export default (url) =>{
    return new Promise( (success, fail) => {
        const req = new XMLHttpRequest();
        req.open('GET', url, true);

        req.addEventListener('load', () => {
            if(req.status >= 200 && req.status < 400){
                success(req.response);
            }else{
                fail(new Error(`Request  Failed: ${req.status}`));
            }
        });

        req.addEventListener('error', () => {
            fail(new Error('Network Error'));
        });

        req.send();
    })
};