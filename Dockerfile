# Swagger-UI
#
#docker pull swaggerapi/swagger-ui
#docker run -p 8330:8080 swaggerapi/swagger-ui
#docker run -p 8330:8080 -v /bar:/foo -e SWAGGER_JSON=/foo/openapi.json swaggerapi/swagger-ui
#docker run -p 8330:8080 -v /bar:/foo -e SWAGGER_JSON=/foo/openapi.json -e BASE_URL=/swagger swaggerapi/swagger-ui

# our base image
FROM swaggerapi/swagger-ui:latest
# copy files required for the app to run
COPY requirements/api/swagger-editor/openapi.json /tmp
# tell the port number the container should expose
EXPOSE 8080
# sets the environment variable(s)
ENV SWAGGER_JSON=/tmp/openapi.json
#ENV BASE_URL=/swagger-ui
