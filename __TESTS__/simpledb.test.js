const { rm, mkdir } = require('fs/promises');
const SimpleDb = require('../SimpleDB.js');

describe('test SimpleDB class behaviors', () => {
// defines destination directory
  const storageDir = './store';

  beforeEach(() => {
    // clears destination directory
    return rm(storageDir, { recursive: true, force: true })
      .then(() => mkdir(storageDir));
  });

  it('tests SimpleDB save and get', () => {
    // create an object to be passed to the SimpleDB class.
    const newObj = {
      data1: '',
      data2: '',
      data3: 1
    };

    // create a new instance of the SimpleDB class, saved to a variable.
    const simpleDb = new SimpleDb(storageDir);

    // call <variable>.save(<new object>)
    //      .then((id) => <variable>.get(id))
    //      .expect(response).toEqual(<new object>)
    simpleDb.save(newObj)
      .then((id) => simpleDb.get(id))
      .then((response) => expect(response).toEqual(newObj));
  });


  it('tests SimpleDB get with no save', () => {
    // create a new instance of the SimpleDB class, saved to a variable.

    // call <variable>.get(<random integer>)
    //      .expect(response).toEqual(null)
  });

});

