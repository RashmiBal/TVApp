# TVApp

From all the apis available to us at https://www.tvmaze.com/api we decided to do Search. 
This api searches through all the shows in TVmaze database by the show's name. It uses a fuzzy algorithm  (with a fuzziness value of 2), meaning that shows will be found even if our query contains small typos. Results are returned in order of relevancy (best matches on top). 
By presenting each show's basic information in a UI, end-user can pick a specific entry from that list and use the chosen show's ID or URL. Any subsequent requests for information on that show can then be directly made to that show's URL. 
   URL: /search/shows?q=:query
   Example: http://api.tvmaze.com/search/shows?q=girls
For this to work you will need to add appid in: 
   File: TV-App\src\environments\environment.ts
   On Line: appId: '<your app id>',
Git does not have our appId as per good deployment practice.
