// Below are examples of using ESLint errors suppression
// Here it is suppressing a missing return type definition for the greeter function.
import { minus3OrMultiply5Resolver } from "./minus3OrMultiply5resolver";
import * as prompt from 'prompt';

const properties = [
  {
      name: 'aNumber',
      validator: /^(-)\d+$/,
      warning: 'Please enter a number'
  }
];

prompt.start();
console.log('Please write a number. (-1 to exit)');
prompt.get(properties, (err, result): void => {
    const resolver = new minus3OrMultiply5Resolver(1);
    if (err) { onErr(err); }
    if(result.aNumber == -1) {
      console.log('Bye bye!')
      return;
    }
    console.log(`  Number to find sequence: ${result.aNumber}`);
    resolver.findSolution(result.aNumber).then(ok => {
      console.log(`  Sequence found: ${ok}`);
    }, onErr)

  });

function onErr(err) {
  console.log('Error', err);
  return 1;
}