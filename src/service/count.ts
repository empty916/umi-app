import { BaseService } from 'umi';

export default class CountService extends BaseService {
  times = 0;
  start() {
    this.watch('count', ({ state }) => {
      if (this.times === 0) {
        this.times++;
        this.dispatch('count', 'update', state! + 1);
      }
      if (state === 0) {
        this.times = 0;
      }
    });
  }
}
