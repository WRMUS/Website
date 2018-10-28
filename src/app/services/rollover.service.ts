import { Rollover, ROLLOVERS } from '../model/rollovers';

export class RolloverService {
  getRolloverById(rolloverId: number): Rollover {
    for (let rollover of ROLLOVERS) {
      if (rollover.id === rolloverId) {
        return rollover;
      }
    }
    console.error('rollover was not found by id, ' + rolloverId);
  }
}