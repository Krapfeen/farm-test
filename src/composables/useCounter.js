export function useCounter () {
  const countFields = (array, field) => {
    const counts = {};
    array.forEach((value) => {
      const subgroup = value.field;
      if (subgroup) {
        counts[subgroup] = (counts[subgroup] || 0) + 1;
      }
    });
  }

  return {

  }
}
