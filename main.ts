// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars
type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] };

console.log('Hello, world!');
