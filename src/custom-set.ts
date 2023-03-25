import { Identifiable } from "./types";

/**
 * a class for working with an array of unique values
 */
export class CustomSet<T extends Identifiable> {
  /**
   * base array for work
   */
  #value: T[];

  constructor(array: T[] = []) {
    const uniqueIds: string[] = [];

    this.#value = array.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.id);

      if (!isDuplicate) {
        uniqueIds.push(element.id);

        return true;
      }

      return false;
    });
  }

  /**
   * getter for private value
   */
  get array() {
    return this.#value;
  }

  /**
   * get item by passed id.
   */
  getItemBy(id: string) {
    return this.#value.find((item) => item.id === id);
  }

  /**
   * remove item by id from array
   *  - return `true` if item was removed
   *  - return `false` if item not found
   *
   * @returns result of deleting
   */
  removeItemBy(id: string) {
    const targetIndex = this.#value.findIndex((item) => item.id === id);

    if (targetIndex === -1) {
      return false;
    }

    this.#value.splice(targetIndex, 1);
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
      this.#value.push(item);
      return true;
    }
    return false;
  }

  /**
   * the function checks if a similar object exists in the array
   * @param value object with `id` field
   * @returns result of checking
   */
  #isUnique(value: T): boolean {
    const result = this.#value.findIndex((item) => item.id === value.id);

    return result === -1;
  }
}
