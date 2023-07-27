shopt -s extglob

mkdir rendered_templates

for d in templates/!(base)/   
do
    environment=$(basename "$d")
    kubectl kustomize templates/$environment >> rendered_templates/helm-release-"$environment".yaml
done