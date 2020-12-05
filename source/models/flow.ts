import { Step } from '../types';
import { Runner } from './runner';

export class Flow {
  public runner: Runner;
  public steps: Array<Step>;
  public beforeEach: () => any;
  public afterEach: () => any;

  constructor(flow?: Partial<Flow>) {
    this.runner = flow?.runner ?? new Runner();
    this.steps = flow?.steps ?? [];
    this.beforeEach = flow?.beforeEach ?? (() => {});
    this.afterEach = flow?.afterEach ?? (() => {});
  }

  public async run(context: any): Promise<void> {
    for (const step of this.steps) {
      await this.beforeEach();
      await this.runner.do(() => step(context));
      await this.afterEach();
    }
  }
}
