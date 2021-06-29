export default function (server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.db.loadData({
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
}
