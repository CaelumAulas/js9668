import React from 'react';
import { Redirect } from 'react-router-dom';
import { getAuthToken } from '../utils';

export default function PrivateRoute(props) {
    let isAutenticado = getAuthToken() ? true : false;
    const { component: ComponentePrivado, ...propriedades } = props;

    if (isAutenticado) {
        // retornar o componente 
        return <ComponentePrivado {...propriedades} />;
    }
    else {
        return <Redirect to="/admin/login" />;
    }
}