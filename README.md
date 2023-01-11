# randomize-with-percentage

randomize-with-percentage is a typescript library for randomized get items with percentages.

## Installation

Use the package manager __npm__ to install.

```bash
npm install randomize-with-percentage
```

## Usage

```ts
import randomize from "randomize-with-percentage";

const { selectedListItem, value } = randomize([
  { value: 1, percent: 50 },
  { value: 2, percent: 50 },
]);

console.log(selectedListItem) // shows the selected item.   example -> { value: 1, percent: 50 }
console.log(value)            // shows the selected value.  example -> 1
```

```ts
import randomize from "randomize-with-percentage";

// you can set any type in value
const { selectedListItem, value } = randomize<string | boolean | number | object>([
  { value: "potato", percent: 25 },
  { value: false, percent: 25 },
  { value: 10, percent: 25 },
  { value: {}, percent: 25 },
]);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
