# Primo-Expandable-Facets
This application overrides the default sidebar facets in Ex Libris Primo to make them expandable/collapsible.

### System Components
 - PBO

### Skillset Requirements
- PBO (to Update your Primo Theme to add Custom JavaScript)
- Basic JavaScript Skills

### Implementation (Recipe) Steps

#### Step 1) Add initial code and configuration to your Primo Theme
To add this feature, you will need to include the primo-expandable-facets.css stylesheet and the primo-expandable-facets.js JavaScript file in your Primo Theme. Copy the following code into your Primo Theme.

```html
<!-- Collapsible/Expandable Sidebar Facets  -->
<link rel="stylesheet" type="text/css" href="//www.yourlibrary.edu/css/primo-expandable-facets.css" media="all">
<script src="//www.yourlibrary.edu/js/primo-expandable-facets.js"></script>
```

#### Step 2) Include CSS/JavaScript Files

The primo-expandable-facets.css stylesheet and the primo-expandable-facets.js JavaScript file need to be uploaded to Primo or a public web server. Once the files have been uploaded, the following lines must be updated to point to the files' locations:

If you upload the files to an external web server:
```html
<link rel="stylesheet" type="text/css" href="//{REMOTE SERVER}/{REMOTE PATH}/primo-expandable-facets.css" media="all">
<script src="//{REMOTE SERVER}/{REMOTE PATH}/primo-expandable-facets.js"></script>
```
{REMOTE SERVER} - the hostname of your web server
{REMOTE PATH} - the path to the file on your web server

If you upload the files via Primo Back Office (PBO):
```html
<link rel="stylesheet" type="text/css" href="//{PRIMO SERVER DOMAIN NAME}/primo_library/libweb/uploaded_files/{VIEW NAME}/primo-expandable-facets.css" media="all">
<script src="//{PRIMO SERVER DOMAIN NAME}/primo_library/libweb/uploaded_files/{VIEW NAME}/primo-expandable-facets.js"></script>
```
{PRIMO SERVER DOMAIN NAME} - the domain for your Primo website (e.g. alliance-primo.hosted.exlibrisgroup.com)
{VIEW NAME} - the name of the Primo view for which the file was uploaded
