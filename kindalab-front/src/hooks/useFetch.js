import { useState , useEffect, useRef} from 'react';



export const useFetch = ( url ) => {
    
    const [state, setState] = useState({data:null, loading:true,error:null})

    const isMounted = useRef(true);

    useEffect(() => {

        return() =>{
            isMounted.current = false;
        }

    }, [])


    useEffect(() => {

        setState({
            loading:true,
            error:null,
            data:null,
        })
        fetch(url)
        .then (resp => resp.json() )
        .then (data => {
                if( isMounted.current){

                    setState({
                        loading:false,
                        error:null,
                        data:data
                    })
                }else{
                    console.log('no se llamo')
                }
            });

    }, [url])


    return state;

}
 