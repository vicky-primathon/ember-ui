import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class UserComponent extends Component {
  @service api;
  @service users;
  @tracked archived = false;
  @tracked queryParam = "";
  
  get archivedLabel() {
    return this.archived ? "Yes" : "No";
  }

  get archiveButtonTitle() {
    return this.archived ? "Restore User" : "Archive User";    
  }

  get data() {
    const user = this.users.data.users ? this.users.data.users.find((item) => item.id === this.args.model) : {};
    this.archived = user.archived;
    return user;
  }

  @action 
  toggleArchive() {
    this.archived = !this.archived;
    const user = this.users.data.users ? this.users.data.users.find((item) => item.id === this.args.model) : {};
    this.api.updateUserData(user.id, {
      attributes: {
        "name": user.name,
        "image": user.image,
        "value": user.value,
        "archived": this.archived
      }
    });
    this.queryParam = `?refresh=true`;
  }
}
