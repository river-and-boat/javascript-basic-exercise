/* eslint-disable class-methods-use-this */

import flattenArray from "../exercise_05/flattenArray";

/* eslint-disable no-restricted-properties */
export default class Vector {
  #isFirstTime;
  #coordinate_x;
  #coordinate_y;
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.
  // 构造函数

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.#isFirstTime = false;
  }

  // 访问x
  get x() {
    return this.#coordinate_x;
  }

  // 访问y
  get y() {
    return this.#coordinate_y;
  }

  set x(x) {
    if (this.#isFirstTime !== undefined) {
      throw new Error(`can not modify field`);
    }
    this.#coordinate_x = x;
  }

  set y(y) {
    if (this.#isFirstTime !== undefined) {
      throw new Error(`can not modify field`);
    }
    this.#coordinate_y = y;
  }

  // 加法
  static plus(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  // 减法
  static minus(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  }

  // 求直角边
  distance() {
    const distancePow = Math.pow(this.x, 2) + Math.pow(this.y, 2);
    return Math.sqrt(distancePow);
  }

  // PLEASE DELETE THIS LINE AND ADD YOUR IMPLEMENTATION HERE
}
