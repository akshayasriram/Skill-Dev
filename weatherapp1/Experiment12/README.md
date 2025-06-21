# Weather-app

I began by designing a simple UI where users could input a city name to retrieve its weather details. At this stage, I focused on layout and input handling.

During API integration with OpenWeatherMap, I faced my first hurdle:
The app showed a 401 Unauthorized error due to an invalid or missing API key. I resolved this by securely storing the key and correctly formatting the request URL.

As I tested the fetch requests, the browser threw CORS errors, blocking data from the API.
I researched and implemented a temporary CORS proxy during development to bypass the restriction.

After resolving the API call issues, I noticed the app crashed when the user entered a misspelled or unknown city.
I added proper error handling and user feedback to manage invalid input cases.

On continuous testing, I found the UI didn’t update with new city results unless the page was refreshed.
This led me to revise my state management and re-render logic, especially while working with frameworks like React.

Another challenge was a lack of loading feedback. Users couldn’t tell if the app was working while waiting for results.
I implemented a loading message/spinner to improve the user experience.

Finally, I tackled responsiveness issues. The layout looked broken on mobile devices.
I improved the design using responsive CSS to ensure cross-device compatibility.



![alt text](<Screenshot (40).png>)