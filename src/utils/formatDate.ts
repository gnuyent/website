export const formatDate = (date: string) =>
    new Date(date + ' PST').toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
