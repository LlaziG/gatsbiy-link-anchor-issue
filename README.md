## What is this?

This is a repo to recreate an issue with the gatsby `Link` component.
When the gatsby `trailingSlash` option is set to `always`, the Link component adds a "/" before the link component.

## How ro run

1.  **Select a Node.js 14.15.0 or higher**

    In this case v16.13.1 is specified in the .nvmrc file, so run:

    ```shell
    nvm use
    ```

2.  **Run gatsby in dev.**

    ```shell
    npm run develop
    ```

3.  **Go to page /test**

    The site is now running on port 8000 and is accessible here: http://localhost:8000/

    Lets open page /test:
    http://localhost:8000/test/

4.  **Click on the anchor link to see its undesired effect**
