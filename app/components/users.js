import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class UsersComponent extends Component {
  @service users;
  @service router;

  get usersList() {
    return this.users.data.users;
  }

  @action 
  openUserDetails(user) {
    this.router.transitionTo(`/users/${user.id}`);
  }
}
