import faker from 'faker';

function getEntries(journalId, numOfEntries) {
  let entryId = 0;
  let entries = [];
  for (let i = 1; i <= numOfEntries; i++, entryId++) {
    entries.push({
      journalId,
      id: entryId,
      title: `Entry ${entryId}`,
      tags: 'one,two',
      body: 'Blah dee bloo',
      lastModified: faker.date.past().toDateString(),
    });
  }

  return entries;
}

function getJournals(numOfJournals) {
  let journals = [];
  for (let i = 1; i <= numOfJournals; i++) {
    journals.push({
      id: i,
      title: faker.random.words(),
      entries: getEntries(i, Math.floor(Math.random() * 10 + 1)),
      createdAt: faker.date.past(0).toDateString(),
    });
  }

  return journals;
}

export default getJournals(5);
