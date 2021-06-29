import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class UserService extends Service {
  @service api;
  _user = null;

	get data() {
		return { ...this._user };
  }

  async getUser(id) {
    const user = await this.api.getUser(id);
    this._user = {
      ...user.attributes,
      id: user.id,
    }
    return this._user;
  }
}
