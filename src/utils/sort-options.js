export const TITLE_ASC = 'A-Z';
export const TITLE_DESC = 'Z-A';
export const DATE_ASC = 'Newest-Oldest';
export const DATE_DESC = 'Oldest-Newest';

const compareStrings = (title1, title2) => {
  let a = title1.toLowerCase();
  let b = title2.toLowerCase();

  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
};

const compareDates = (date1, date2) => {
  let a = new Date(date1);
  let b = new Date(date2);

  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
};

const sortOptions = {
  [TITLE_DESC]: (entry1, entry2) =>
    compareStrings(entry2?.title, entry1?.title),
  [TITLE_ASC]: (entry1, entry2) => compareStrings(entry1?.title, entry2?.title),
  [DATE_ASC]: (entry1, entry2) =>
    compareDates(entry2?.lastModified, entry1?.lastModified),
  [DATE_DESC]: (entry1, entry2) =>
    compareDates(entry1?.lastModified, entry2?.lastModified),
};

export default sortOptions;
