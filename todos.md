[ ] pre-fetch resources
[ ] make description loadable
[ ] Make calendar inside description loadable with intersection observer
[x] Make related listings loadable with intersection observer
[x] Make modal loadable with onClick event (pre-fetch)
[ ] Make better loading components

issues with SSR coupled with loadable:

1. html is shown
2. the module is dynamically imported, thus showing a loading compnent
3. the actual component is then mounted again after import asynchronously finishes
4. So probably, loadable components need to be created, and loaded on the server side as well