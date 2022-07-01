## Passenger-Counter-App

Passenger Counter App is a simple application to count the number of passengers using public transport and save the earlier day's data of passenger count.

There are primarily **two functions** to perform these actions. 

The first function, `increment()` maintains a count of the number of people using the transport facilities. 

```js
  function increment() {
    count += 1;
    countE1.textContent = count;
  }
```

The second function, `save()` is used to remember the total number of passengers who have used the transport facilities earlier. 

```js
  function save() {
    let countStr = count + " - ";
    saveE1.textContentStr;
    document.getElementById("save-el").innerHTML = count;
    countE1.textContent = 0;
    count = 0;
  }
```
