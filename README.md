# Frontend Take Home Test

## Design

I decided to break the main view up into two specific sub-views that I called "showcase" and "table". The showcase was for displaying all drawn hands in a "thumbnail" style as well as several buttons for interacting with the deck. The table was solely for displaying the currently active hand as well as what the best hand within that would be. I wanted the focus to be on whatever the active hand was and only a small area for interaction since the "value" in the project is the determination of what your best hand is. I also wanted to break the actual cards out into their own component since they seemed to be fairly stateless and reusable. It seemed to make sense to have them be used in both the Showcase and Table views while just having a size prop to differentiate between the two.

## Structure

I wanted to structure the project similarly (although not exactly, due to the time constraint) how I would in a work environment. I chose to break out the api interactions, components, and even utility functions into their own folders to allow easier intuition of where new elements of the system would go or where you could find them if you were new. I wrote unit tests for the two "heaviest" pieces which ended up being the showcase and the deck utilities due to them containing the bulk of both the logic and interactions.

## Global State

While it was mentioned as optional in the test, I specifically chose not to pursue to a global state management library like Redux or even something like React Context. Considering there very limited interactions between the different elements of the system I didn't think it was necessary to structure the state that way.

## Other Thoughts

I would have loved to have had to time to give a little more care to the UI both from a responsiveness angle but also just in look and polish. I think some level of animation would have been a really nice touch as well. I also would have liked to add React Suspense to handle any loading state bits when calling the API to draw a new hand.

Regardless of some small changes though, I really enjoyed the process of getting to put this together!
