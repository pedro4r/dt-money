export const dateFormatter = new Intl.DateTimeFormat('us-EN');

export const priceFormatter = new Intl.NumberFormat('us-EN', {
    style: 'currency',
    currency: 'USD',
});