docker login
docker pull svenklettatmurr/open_api_tools_repo:latest
docker run -d -p 8331:8080 svenklettatmurr/open_api_tools_repo:latest

#################################
#
#docker container ls -a
#docker container stop <container_id>
#docker container rm <container_id>
#
#docker image ls -a
#docker image rm xyz
#
#docker logs <container_id>
