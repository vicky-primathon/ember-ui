import Service from '@ember/service';

export default class ApiService extends Service {
  requestOptionDefaults(data = {}, headers = {}) {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: JSON.stringify(data),
    };
  }
  async request(url, data) {
    const res = await fetch(`http://localhost:4200${url}`, data); 
    if (!res.ok) {
        throw res;
    }
    return await res.json();
  }

  async updateUserData(id, data) {
    return this.request(`/api/users/${id}`, this.requestOptionDefaults(data));
  }

  async getUsers() {
    return this.request("/api/users");
  }

  async getUser(id) {
    return this.request(`/api/users/${id}`);
  }
}
