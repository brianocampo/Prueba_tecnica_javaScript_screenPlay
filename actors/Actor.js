export class Actor {
  constructor(name, page) {
    this.name = name;
    this.page = page;
  }

  async attemptsTo(...tasks) {
    for (const task of tasks) {
      await task.performAs(this);
    }
  }

  asks(question) {
    return question.answeredBy(this);
  }
}
