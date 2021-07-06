export const AUTOCAELUM_API = 'https://jhonatanjacinto.dev/autocaelum/v1';
export const API_USER = 'jhonatan';
export const getAuthToken = () => localStorage.getItem('AUTOCAELUM_TOKEN');
export const setAuthToken = (token) => localStorage.setItem('AUTOCAELUM_TOKEN', token);
export function formataMoeda(valor) {
    return parseFloat(valor).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}
