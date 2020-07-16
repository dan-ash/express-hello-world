docker_build('danash001/express-hello-world', '.')
k8s_yaml('app.yaml')
allow_k8s_contexts(['minikube', 'kind', 'my-kind-cluster'])
k8s_resource('express-hello-world', port_forwards=3000)
