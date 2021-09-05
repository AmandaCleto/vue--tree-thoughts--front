export const datetimeToPtBr = (datetimeString) => {
    if(!datetimeString) return '';

    const date = new Date(datetimeString);

    return new Intl.DateTimeFormat('pt-br', {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: undefined,
      hour12: false
    }).format(date);
};