export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:7000/';

export const formatExpiry = (expiresAt) => {
    if (!expiresAt) return '';
    return new Date(expiresAt).toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short',
    });
};