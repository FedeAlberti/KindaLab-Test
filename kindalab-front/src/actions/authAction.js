import { fetchHelper } from '../helpers/fetchHelper';
import { typesAuth } from '../types/typesAuth';
import Swal from 'sweetalert2';

export const LoginAction = async( email, password ,dispatch) => {
    
        const resp = await fetchHelper( 'auth', { email, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
        
    }


export const RegisterAction = async( email, password, name , dispatch) => {

        const resp = await fetchHelper( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    }

export const LogoutAction = (dispatch) => {
        localStorage.clear();
        dispatch( logout())
}

const login = ( user ) => ({
    type: typesAuth.login,
    payload: user
});

const logout = () => { return { type: typesAuth.logout }}