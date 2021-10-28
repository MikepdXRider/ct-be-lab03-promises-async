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
    const newObj1 = {
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

    return simpleDb.save(newObj1)
      .then(() => simpleDb.save(newObj2))
      .then(() => simpleDb.getAll())
    //   Is this okay? Should I instead be checking the second index of the array for an object with expect.any() property values? 
      .then((response) => expect(response).toEqual(expect.arrayContaining([newObj1])));
  });

  it('tests SimpleDB remove', () => {
    const ranObj = {
      data1: 'D1',
      data2: 'D2',
      data3: 3
    };

    const simpleDb = new SimpleDb(storageDir);

    return simpleDb.save(ranObj)
      .then(() => simpleDb.remove(ranObj.id))
      .then(() => simpleDb.get(ranObj.id))
      .then((response) => expect(response).toEqual(null));
  });

  //   it('tests SimpleDB remove', () => {
  //     const ranObj = {
  //       data1: 'D1',
  //       data2: 'D2',
  //       data3: 3
  //     };

  //     const simpleDb = new SimpleDb(storageDir);

  //     return simpleDb.save(ranObj)
  //       .then(() => simpleDb.remove(ranObj.id))
  //       .then(() => simpleDb.get(ranObj.id))
  //       .then((response) => expect(response).toEqual(null));
  //   });
});

