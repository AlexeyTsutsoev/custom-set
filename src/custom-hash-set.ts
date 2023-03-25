import { Identifiable } from "./types";

export class CustomHashSet<T extends Identifiable> {
  #value: Record<string, T> = {};

  constructor(array: Iterable<T>) {
    const result: Record<string, T> = {};

    for (let item of array) {
      if (typeof result[item.id] === "undefined") {
        result[item.id] = item;
      }
    }

    this.#value = result;
  }

  /**
   * getter for private value
   */
  get array() {
    return Object.values(this.#value);
  }

  /**
   * get item by passed id.
   */
  getItemBy(id: string) {
    return this.#value[id];
  }

  /**
   * remove item by id from array
   *  - return `true` if item was removed
   *  - return `false` if item not found
   *
   * @returns result of deleting
   */
  removeItemBy(id: string) {
    if (typeof this.#value[id] === "undefined") {
      return false;
    }

    delete this.#value[id];
    return true;
  }

  /**
   * function for adding new item
   *  - return `true` if item was added
   *  - return `false` if item with the same id already exist
   *
   * @param item object with `id` field
   * @returns result of adding
   */
  add(item: T): boolean {
    if (this.#isUnique(item)) {
      this.#value[item.id] = item;
      return true;
    }
    return false;
  }

  /**
   * the function checks if a similar object exists in the array
   * @param value object with `id` field
   * @returns result of checking
   */
  #isUnique(item: T): boolean {
    const result = this.#value[item.id];

    return typeof result === "undefined";
  }
}
