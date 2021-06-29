import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UsersUserRoute extends Route {
  @service users;
  async model(params) {
    return params.user_id;
  }
  async beforeModel() {
    await this.users.getUsers();
  }
}
