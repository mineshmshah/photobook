//   const sortingMethod = state.sorting.sortBy;
//   const sortingOrder = state.sorting.ascending;
//   let orderedData = state.filter.filteredData;

//   switch (sortingMethod) {
//     case 'default':
//       orderedData = sortingOrder
//         ? [...orderedData].sort((a, b) => a.id - b.id)
//         : [...orderedData].sort((a, b) => b.id - a.id);
//       break;
//     case 'income':
//       orderedData = sortingOrder
//         ? [...orderedData].sort((a, b) => a.salary - b.salary)
//         : [...orderedData].sort((a, b) => b.salary - a.salary);
//       break;
//     case 'industry':
//       orderedData = [...orderedData].sort((a, b) => {
//         if (a.industry === b.industry) {
//           return 0;
//         }
//         if (a.industry === null) {
//           return 1;
//         }
//         if (b.industry === null) {
//           return -1;
//         }
//         if (a.industry === 'n/a') {
//           return 1;
//         }
//         if (b.industry === 'n/a') {
//           return -1;
//         }
//         return sortingOrder
//           ? (a.industry || '').localeCompare(b.industry || '')
//           : (b.industry || '').localeCompare(a.industry || '');
//       });
//       break;
//     case 'date':
//       orderedData = [...orderedData].sort((a, b) => {
//         // if (a.date === b.date) {
//         //   return 0;
//         // }
//         // if (a.date === null) {
//         //   return 1;
//         // }
//         // if (b.date === null) {
//         //   return -1;
//         // }
//         const aDate = a.date_of_birth.split('/');
//         const aDateNew = new Date(aDate[2], aDate[1], aDate[0]);

//         const bDate = b.date_of_birth.split('/');
//         const bDateNew = new Date(bDate[2], bDate[1], bDate[0]);

//         return sortingOrder
//           ? aDateNew.getTime() - bDateNew.getTime()
//           : bDateNew.getTime() - aDateNew.getTime();
//       });
//       break;
//     default:
//       break;
//   }

//   return {
//     ...state,
//     filter: {
//       ...state.data,
//       filteredData: orderedData,
//     },
//   };

//       case FILTER_RESULTS: {
//   const filteredData = state.data.value.filter(user => {
//     const firstNameExists = !action.firstName || (user.first_name && user.first_name.toLowerCase().includes(action.firstName))
//     const lastNameExists = !action.lastName || (user.last_name && user.last_name.toLowerCase().includes(action.lastName))
//    return firstNameExists && lastNameExists
//   })
//   return {
//      ...state,
//      filter: {
//       firstName: action.firstName,
//       lastName: action.lastName,
//       filteredData
//     }
//   }
// }
