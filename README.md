## Developers API

Developers API keep track of developers and their skills
To run it locally first install the dependecios with:
```
npm i
```
And to run int just type:
```
npm start
```
### Integration with Heroku
All endpoints are available at http://developers-api.herokuapp.com/

The API has 4 endpoint that work as follows

GET /developers
Get all developers and their information

POST /developers
Add a new developer, it will validate that the incoming request has the following attributes
{
	"nombres_completos":"Some cool Name",
	"link_github":"a link to that user",
	"tecnologias_conocidas": ["an", "array", "of", "technologies],
}

PUT /developers/id
This will update by it id (uuid generated during thw creation of a user). It has no extra validations.
It will allow anything that might be needed in the developer.

DELETE /developers/id
This endpoint will delete a developer by its Id

##Testing

### Unit testing
For developersAPI Mocha and Chai are being use. To run the test type

```
npm test
```

### End to End Testing

For testing the Endpoint a JSON file has been created under e2e testing. This can be run with Postman

### Run docker image

This project has a Dockerfile configured. First build it with
```
docker build -t <a cool name> .
```
and run it with:
```
docker run -p 3001:3000 -d <the cool name you give it above>
```
### Technologies
The following API is build with NodeJS and Express
