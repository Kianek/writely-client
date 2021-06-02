let entryId = 0;
function getEntries(journalId, numOfEntries) {
  let entries = [];
  for (let i = 0; i < numOfEntries; i++, entryId++) {
    entries.push({
      journalId,
      id: entryId,
      title: `Entry ${entryId}`,
      tags: 'one,two',
      body: 'Blah dee bloo',
    });
  }

  return entries;
}

const journals = [
  {
    id: 1,
    title: 'Spiffy Journal',
    entries: getEntries(1, 4),
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 2,
    title: 'Dreams',
    entries: getEntries(2, 2),
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 3,
    title: 'Favorite Movies',
    entries: getEntries(3, 7),
    createdAt: new Date().toLocaleTimeString(),
  },
];

export default journals;
