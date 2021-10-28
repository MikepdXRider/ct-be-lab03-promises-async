const { rm, mkdir } = require('fs/promises');
const SimpleDb = require('../SimpleDB.js');

describe('test SimpleDB class behaviors', () => {
// defines destination directory
  const storageDir = './__TESTS__/store';

  beforeEach(() => {
    // clears destination directory
    return rm(storageDir, { recursive: true, force: true })
      .then(() => mkdir(storageDir));
  });

  it('tests SimpleDB save and get', () => {
    const newObj = {
      data1: '',
      data2: '',
      data3: 1
    };

    const simpleDb = new SimpleDb(storageDir);

    return simpleDb.save(newObj)
      .then(() => simpleDb.get(newObj.id))
      .then((response) => expect(response).toEqual(newObj));
  });


  it('tests SimpleDB get with no save', () => {
    const simpleDb = new SimpleDb(storageDir);

    return simpleDb.get(2)
      .then((response) => expect(response).toEqual(null));
  });


  it('tests SimpleDB getAll', () => {
    // Get all needs to read the directory, finding all objs,
    // Then promise.all this.get all of the files. 
    // Then map the response and return parsed file contents. 
    const newObj = {
      data1: '',
      data2: '',
      data3: 1
    };

    const newObj2 = {
      data1: '',
      data2: '',
      data3: 2
    };

    const simpleDb = new SimpleDb(storageDir);

    return simpleDb.save(newObj)
      .then(() => simpleDb.save(newObj2))
      .then(() => simpleDb.getAll())
      .then((response) => expect(response).toEqual(expect.arrayContaining([newObj2])));
  });
});

