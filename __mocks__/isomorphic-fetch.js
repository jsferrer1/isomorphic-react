let __value = 42;
const isomorphicFetch = jest.fn(()=>__value); // this is a spy
isomorphicFetch.__setValue = v => __value = v;
export default isomorphicFetch;