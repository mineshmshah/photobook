const sortAscending = (a, b, sortingMethod) => a[sortingMethod] - b[sortingMethod];
const sortDescending = (a, b, sortingMethod) => b[sortingMethod] - a[sortingMethod];

export const sortDataBy = (a, b, sortingMethod, ascending) => {
    switch (sortingMethod) {
            case 'default':
              return ascending ? sortAscending(a, b, 'id') : sortDescending(a, b, 'id');
            case 'income':
              if (a.industry === null) {
                return 1;
              }
              if (b.industry === null) {
                return -1;
              }
              return ascending ? sortAscending(a, b, 'salary') : sortDescending(a, b, 'salary');
            case 'date': {
              const aDate = a.date_of_birth.split('/');
              const aDateNew = new Date(aDate[2], aDate[1], aDate[0]);

              const bDate = b.date_of_birth.split('/');
              const bDateNew = new Date(bDate[2], bDate[1], bDate[0]);

              return ascending
                ? aDateNew.getTime() - bDateNew.getTime()
                : bDateNew.getTime() - aDateNew.getTime();
            }
            case 'industry':
              if (a.industry === b.industry) {
                return 0;
              }
              if (a.industry === null) {
                return 1;
              }
              if (b.industry === null) {
                return -1;
              }
              if (a.industry === 'n/a') {
                return 1;
              }
              if (b.industry === 'n/a') {
                return -1;
              }
              return ascending
                ? (a.industry || '').localeCompare(b.industry || '')
                : (b.industry || '').localeCompare(a.industry || '');

            default:
              return 0;
          }
}