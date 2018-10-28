import { Person } from '../model/data-interfaces';
import { PEOPLE } from '../model/People';

export class PersonService {
  getPersonById(id: number): Person {
    for (let person of PEOPLE) {
      if (person.id === id) {
        return person;
      }
    }
    console.error('person was not found by id, ' + id);
  }
}