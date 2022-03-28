// the actual reduce is a method on Array<Input>, but this is a good approximation
type Reduce<Input, Output> = (
  array: Array<Input>,
  reducerFn: ReducerFn<Input, Output>,
  initialValue: Output
) => Output;

type ReducerFn<Input, Output> = (
  value: Input,
  accumulator: Output,
  index: number,
  array: Array<Input>
) => Output;

// `sum` is an example of a basic reducer function
const sum: ReducerFn<number, number> = (val, acc) => val + acc;

function arraySum(numbers: Array<number>): number {
  return numbers.reduce(sum, 0);
}

// you could also do...
const product: ReducerFn<number, number> = (val, acc) => val * acc;

function arrayProduct(numbers: Array<number>): number {
  return numbers.reduce(product, 1);
}

// see note 1 below, if you want

// `Input` and `Output` can be completely different, e.g.
const anyDefined: ReducerFn<any, boolean> = (val, acc) =>
  typeof val !== 'undefined' || acc;

// let's write `concatAll`, which concatenates (flattens) an `Array<Array<any>>`
const concatAll: ReducerFn<Array<Array<any>>, Array<any>> = undefined;

function concat(arrays: Array<Array<any>>): Array<any> {
  return arrays.reduce(concatAll, []);
}

// sometimes you need more than a basic function--you need a function that
// returns another function. Functions that take other functions as parameters,
// or return other functions as their output are known as "higher-order functions."

// let's write `makeAnyFunction`, a function that returns a `ReducerFn` that
// could be used to check if _any_ element in an array passes a given test
function makeAnyFunction<Input>(f: any): ReducerFn<Input, boolean> {
  return undefined;
}

function boolAny<Input>(
  input: Array<Input>,
  fn: ReducerFn<Input, boolean>
): boolean {
  return undefined;
}

// now it's your turn!

// write `makeFilterFunction`, a function that returns a `ReducerFn` that could
// be used to filter out elements that don't pass a given test
function makeFilterFunction<Input>(f: any): ReducerFn<Input, Array<Input>> {
  return undefined;
}

function filter<Input>(
  array: Array<Input>,
  fn: ReducerFn<Input, Array<Input>>
): Array<Input> {
  return undefined;
}

// write `makeMapFunction`, a function that returns a `ReducerFn` that
// could be used to apply a function to every element of an array
function makeMapFunction<Input, Mapped>(
  f: (input: Input) => Mapped
): ReducerFn<Input, Array<Mapped>> {
  return undefined;
}

function map<Input, Mapped>(
  array: Array<Input>,
  fn: ReducerFn<Input, Mapped>
): Array<Mapped> {
  return undefined;
}

// write `makeFlatMapFunction`, a function that returns a `ReducerFn` that
// could be used to apply a function that returns an array to every element
// of an array and concatenates the results
// see note 2 below, if you want
function makeFlatMapFunction<Input, Mapped>(
  f: (input: Input) => Array<Mapped>
): ReducerFn<Input, Array<Mapped>> {
  return undefined;
}

function flatMap<Input, Mapped>(
  array: Array<Input>,
  fn: ReducerFn<Input, Array<Mapped>>
): Array<Mapped> {
  return undefined;
}

//
//
// extra credit

// write `makeFindFunction`, a function that returns a `ReducerFn` that could
// be used to find the first element that passes a given test, or `undefined`
// if no element passes
function makeFindFunction<Input>(f: any): ReducerFn<Input, Input | undefined> {
  return undefined;
}

function find<Input>(
  array: Array<Input>,
  fn: ReducerFn<Input, Input | undefined>
): Input | undefined {
  return undefined;
}

// write `makeFindIndexFunction`, a function that returns a `ReducerFn` that
// could be used to find the index of the first element that passes a given
// test, or `-1` if no element passes
function makeFindIndexFunction<Input>(f: any): ReducerFn<Input, number> {
  return undefined;
}

function findIndex<Input>(
  array: Array<Input>,
  fn: ReducerFn<Input, number>
): number {
  return undefined;
}

// extra extra credit
//
// Haskell calls reduce `foldl`, because it "folds" elements together,
// starting from the left. It also has a function `foldl1`, which is
// like `reduce` but uses the 0th element of the array as the initial value.
// write `reduce1`

//
//
//
//
//
//
//
//
//
//

// note 1:
// if we restrict them to positive integers, `sum` and `product` are examples
// of what are known in Category Theory as a Monoid, which is defined as a
// triple (T, e, f) where `T` is some type (here, positive integers), `e` is a
// "zero" value (0 for sum, 1 for product), and `f` is a function (T, T) => T
// that combines them, provided `T`, `e`, and `f` follow 2 "laws":
// f(x, f(y, z)) === f(f(x, y), z) (associativity, e.g. 1 + (2 + 3) === (1 + 2) + 3)
// f(x, e) === f(e, x) === x (identity, e.g 1 + 0 === 0 + 1 === 1)
//
// list concatenation is another Monoid, where `T` = Array<Whatever>, `e` = [],
// and `f` = list1 ++ list2
//
//
// note 2:
// you just wrote a Monad :)
