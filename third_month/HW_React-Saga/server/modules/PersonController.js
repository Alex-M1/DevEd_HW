const PersonSchema = require('./PersonSchema');

class PersonController {
  getPerson = async (_req, res) => {
    try {
      const persons = await PersonSchema.find();
      this.#setResponse(res, 200, persons);
    } catch (err) {
      this.#setResponse(res, 400, 'something been wrong');
    }
  }

  postPerson = async (req, res) => {
    try {
      const { name, age, phone, email, company } = req.body;
      const newPerson = new PersonSchema({ name, age, phone, email, company });
      await newPerson.save();
      const persons = await PersonSchema.find();
      this.#setResponse(res, 200, persons);
    } catch (err) {
      this.#setResponse(res, 400, 'something been wrong');
    }
  }

  putPerson = async (req, res) => {
    try {
      const id = req.query.id;
      await PersonSchema.findOneAndUpdate({ _id: id }, { $set: { ...req.body } });
      const persons = await PersonSchema.find();
      this.#setResponse(res, 200, persons);
    } catch (err) {
      this.#setResponse(res, 400, 'something been wrong');
    }
  }

  deletPerson = async (req, res) => {
    try {
      if (req.query.id === 'all') {
        await PersonSchema.deleteMany();
        const persons = await PersonSchema.find();
        return this.#setResponse(res, 200, persons);
      }
      await PersonSchema.findByIdAndDelete({ _id: req.query.id });
      const person = await PersonSchema.find();
      this.#setResponse(res, 200, person);
    } catch (err) {
      this.#setResponse(res, 400, 'something been wrong');
    }
  }

  #setResponse = (res, status, message) => {
    return res.status(status).json({
      message,
    });
  }
}

module.exports = PersonController;
