const NotePayloadsSchema = require("./schema");

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadsSchema.validate(payload);
    if (validationResult.error) {
      throw new Error(validationResult.error.message);
    }
  },
};

module.exports = NotesValidator;
