## useIsOnline: A React Hook to Check the Online Status of the User's Device

#### The `useIsOnline` hook is a custom React hook that allows you to check the online status of the user's device. It uses the `window.navigator.onLine` property, which returns a boolean value indicating whether the device is currently online (true) or offline (false). The hook provides a simple and efficient way to monitor the online/offline status of the user in a React application.


## useIsTabActive : A React Hook to Check if the Tab is Active
#### The `useIsActiveTab` hook internally uses the `document.visibilityState` property to check if the tab is visible ("visible") or not ("hidden"). It listens for the "visibilitychange" event on the document to update the state whenever the tab's visibility changes.


## useMousePointer:  A React Hook to get the coordinated of the mouse pointer
#### The `useMousePointer` hook uses the `window.addEventListener` method to listen for `"mousemove"` events. It updates the position state with the mouse's current x and y coordinates whenever the mouse moves across the browser window.