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
    entries: getEntries(3, 15),
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 4,
    title: 'Favorite Movies',
    entries: getEntries(4, 15),
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 5,
    title: 'Favorite Movies',
    entries: getEntries(5, 15),
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 6,
    title: 'Favorite Movies',
    entries: getEntries(6, 15),
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 7,
    title: 'Favorite Movies',
    entries: getEntries(7, 15),
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 8,
    title: 'Favorite Movies',
    entries: getEntries(8, 15),
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 9,
    title: 'Favorite Movies',
    entries: getEntries(9, 15),
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 10,
    title: 'Favorite Movies',
    entries: getEntries(10, 15),
    createdAt: new Date().toLocaleTimeString(),
  },
];

export default journals;
