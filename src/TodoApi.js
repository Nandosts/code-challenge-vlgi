export default class TodoApi {
  static async getAll() {
    return JSON.parse(localStorage.getItem("todo-list") || "[]");
  }

  static async save(tasks) {
    localStorage.setItem("todo-list", JSON.stringify(tasks));
  }
}