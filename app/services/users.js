import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class UsersService extends Service {
  @service api;
  _users = null;

	get data() {
		return { users: this._users };
  }

  async getUsers() {
    const users = await this.api.getUsers();
    this._users = users.map((item) => {
      return {
        ...item.attributes,
        id: item.id,
      }
    })
    return this._users;
  }
}
