How to make two different angular components communicate/share a single model?
-One parent component that deals with logic and containment of shared information.
-Create a shared data service so that the information is updated and contained within that service.

Like be able to click an item/object in one pane and be able to edit them on a right panel control.

How to handle the async request to the back end and give user feedback that it is working?
-Not implemented, but this can be done with loading animations that display when content is not fully ready for the user experience.

If two components need the same api model, how do they get it without making two api calls to the back end if they are on the same page?
-See answer to question 1



Someday we might need to translate this into at least 6 million different forms of communication. How can we architect this front-end application to be ready for that?
-It appears if you have the text separated out and not hard-coded within the HTML, it is easier to set up a function that provides the correct language depending on the locale.

We have big plans for this directory to maybe include ships, planets and more. We don't have time for all of that right now, but should design the application so we're ready to expand its capabilities when we're ready.
-Not implemented, but adding a few more methods to my SWAPI service would make this more feasible. Generalizing the modules more so they can be reused would help in this process.

Not everyone is on a planet with solid network connectivity, but fortunately modern browsers can store information locally for offline usage. How can we accomplish that with our web application?
-Not implemented, but some sort of caching functionality would seem to be appropriate here. I was able to find a service called ng-book that would accomplish this.
