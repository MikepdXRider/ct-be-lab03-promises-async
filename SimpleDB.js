// constructor(rootDir)
// Allows creation via new SimpleDb(rootDir). The rootDir is will be the folder in which files will be saved.

// .save(<objectToSave>)
// Assigns a unique id property to the object (this will mutate the incoming object)
// Serializes, the object using JSON.stringify and saves to a JSON file named with the id and having a .json file extension

// .get(<id>)
// Reads the contents of the JSON file with the corresponding ID
// Deserializes to an object using JSON.parse
// If the id (file) does not exist, should return null Use .catch to check for file not found (ENOENT). Make sure to rethrow any other error.

// .getAll()
// Returns an array of all the objects in the directory, deserialized from the corresponding files in the directory.

// The work to retrieve the files should be done in parallel (Promise.all)

// STRETCH .remove(<id>)
// Remove the JSON file with the corresponding ID.

// STRETCH .update(<objectToUpdate>)
// Update the JSON file with the corresponding ID with the serialized contents of the new supplied object.

// REFACTOR: Consider if save and update can use a common method



class SimpleDb {
    
}

module.exports = SimpleDb;
