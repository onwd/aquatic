export class RunnerStoppedException extends Error {
  constructor() {
    super('Runner has stopped');

    Object.setPrototypeOf(this, RunnerStoppedException.prototype);
  }
}
