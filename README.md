# Brat-.ann-to-Solr-XML- & Front End(HTML,CSS and JS)
Annotation files(.ann) from brat tool to XML for Solr indexing

## Useful commands
bin/solr restart -c -p 8983 -s example/cloud/node1/solr

bin/solr restart -c -p 7574 -z localhost:9983 -s example/cloud/node2/solr

##  Changes to be made to match your solr indexing

Collection name and the port number as per your configuration

URL for query
http://localhost:8983/solr/"THE COLLECTION NAME"/select?q="QUERY"

Returns a JSON object

