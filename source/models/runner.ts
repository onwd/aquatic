export class Runner {
  public beforeEach: () => any;
  public afterEach: () => any;

  constructor(runner?: Partial<Runner>) {
    this.beforeEach = runner?.beforeEach ?? (() => {});
    this.afterEach = runner?.afterEach ?? (() => {});
  }

  public async do(action: any): Promise<any> {
    await this.beforeEach();

    const result = await action();

    await this.afterEach();

    return result;
  }
}
