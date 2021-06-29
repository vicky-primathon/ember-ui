import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | users', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);


  test('visiting /users', async function(assert) {
    this.server.db.loadData({
      users: [
        {
          "id": "1",
          "type": "user",
          "attributes": {
            "name": "Albert Einstein",
            "image": "/images/Einstein.jpg",
            "value": "false",
          }
        },
        {
          "id": "2",
          "type": "user",
          "attributes": {
            "name": "Walt Disney",
            "image": "/images/Walt.jpg",
            "value": "false"
          }
        },
        {
          "id": "3",
          "type": "user",
          "attributes": {
            "name": "Bruce Lee",
            "image": "/images/Bruce.jpg",
            "value": "false"
          }
        },
        {
          "id": "4",
          "type": "user",
          "attributes": {
            "name": "Neil Armstrong",
            "image": "/images/Neil.jpg",
            "value": "false"
          }
        }
      ]
    });
    await visit('/users');

    assert.equal(currentURL(), '/users');

    await click(document.querySelector("[data-test-user]"));

    assert.equal(currentURL(), '/users/1');

    await click('[data-test-toggle-archive]');

    await visit('/users');

    await visit('/users/1');

    assert.equal(currentURL(), '/users/1');


    assert.dom('[data-test-toggle-archive-label]').includesText("Archived: Yes");

  });
});
