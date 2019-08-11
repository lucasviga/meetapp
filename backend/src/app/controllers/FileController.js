import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    console.log({ name, path });

    const file = await File.create({ name, path });

    console.log('File criado com sucesso');

    return res.json(file);
  }
}

export default new FileController();
