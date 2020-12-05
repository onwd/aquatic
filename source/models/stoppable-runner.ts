import { RunnerStoppedException } from '../exceptions';
import { Runner } from './runner';

export class StoppableRunner extends Runner {
  public isStopped: boolean = false;

  public do(action: any): any {
    if (this.isStopped) {
      throw new RunnerStoppedException();
    }

    return super.do(action);
  }

  public stop(): void {
    this.isStopped = true;
  }
}
