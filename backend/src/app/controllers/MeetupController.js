import * as Yup from 'yup';
import Meetup from '../models/Meetup';
// import User from '../models/User';

class MeetupController {
  async index(req, res) {
    const user = req.userId;

    const showMeetups = await Meetup.findAll({
      where: { user_id: user },
    });

    return res.json(showMeetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      file_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation is failure' });
    }

    const user = req.userId;

    console.log(user);

    const { title, description, location, date, file_id } = req.body;

    const meetup = await Meetup.create({
      title,
      description,
      location,
      date,
      file_id,
      user_id: user,
    });

    return res.json(meetup);
  }
}

export default new MeetupController();
