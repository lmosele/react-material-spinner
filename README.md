# [React](http://facebook.github.io/react/)-spinner

Based on chenglou's [react-spinner](https://github.com/chenglou/react-spinner).

Zero configuration material design loading spinner w/ color options

(To build example locally, clone this repo, `npm install && npm start` then open http://localhost:3000/example/)

## API

```html
 <h5>Spinner Colors</h5>
     <Spinner pathColor='gray' size='small' animation='slow' />
     <br />
     <Spinner pathColor='black' size='small' animation='slow' />
     <br />
     <Spinner pathColor='blue' size='small' animation='slow' />
     <br />
     <Spinner pathColor='white' size='small' animation='slow' />
     <br />
     <hr />
     <br />
     <h5>Spinner Sizes</h5>
     <Spinner pathColor='grey' size='small' animation='slow' />
     <br />
     <Spinner pathColor='grey' size='medium' animation='slow' />
     <br />
     <Spinner pathColor='grey' size='large' animation='slow' />
     <br />
     <hr />
     <br />
     <h5>Spinner Speeds</h5>
     <Spinner pathColor='grey' size='small' animation='slow' />
     <br />
     <Spinner pathColor='grey' size='small' animation='medium' />
     <br />
     <Spinner pathColor='grey' size='small' animation='fast' />
```


#### &lt;Spinner />
Adds the spinner, which centers itself based on its container's dimensions. If those are not predefined, simply manually center it by adding more style rules to the exposed `.react-spinner` class [here](https://github.com/chenglou/react-spinner/blob/master/react-spinner.css#L1-L7).


## License

MIT.
