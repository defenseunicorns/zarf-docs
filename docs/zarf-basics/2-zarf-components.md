---
sidebar_position: 2
---

# Understanding Zarf Components


While Zarf is fairly unopinionated regarding what runs in your cluster, that is not to say that it's completely indifferent. It has _distinct_ opinions, for example, about how to meet many common production application functionality needs&mdash;we call these opinions **components**.

Think of components as something like named capabilities.

They're intended to fill in the space _around_ your apps; to do things that must be done but which aren't your core concern&mdash;things like running application logging & monitoring services, or installing pre-configured cluster management software.

Backed by tooling you already know (and love) & structured to fill the gaps you don't want to have to worry over, Zarf's components tie together common software sets and give you an easy, _named_ way to get them into your clusters.

&nbsp;


## Mandatory Components

Zarf's work necessitates that some components are "always on" (a.k.a. required & cannot be disabled). These components are part of the default [init package](https://github.com/defenseunicorns/zarf/blob/master/zarf.yaml) and are always deployed whenever you perform a `zarf init` command. Those include:

|                         | Description                                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| zarf-injector           | Adds a Rust and Go binary to the working directory to use during the registry bootstrapping.
| container-registry-seed | Adds a container registry so Zarf can bootstrap itself into the cluster.                                             |
| container-registry      | Adds a container registry service&mdash;[docker registry](https://docs.docker.com/registry/)&mdash;into the cluster. |

When you are creating your own packages/components, you can choose to make a component mandatory by adding the `required: true`. If you do not add this key, the component will be considered optional.

&nbsp;


## Additional Components

In addition to those that are always installed, Zarf's optional components provide additional functionality and can be enabled as & when you need them.

These optional components for the init package are listed below along with the "magic strings" you pass to `zarf init --components` to pull them in:

| --components | Description                                                                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| k3s          | Installs a lightweight Kubernetes Cluster on the local host&mdash;[k3s](https://k3s.io/)&mdash;and configures it to start up on boot.                             |
| logging      | Adds a log monitoring stack&mdash;[promtail / loki / graphana (a.k.a. PLG)](https://github.com/grafana/loki)&mdash;into the cluster.                              |
| git-server   | Adds a [GitOps](https://www.cloudbees.com/gitops/what-is-gitops)-compatible source control service&mdash;[Gitea](https://gitea.io/en-us/)&mdash;into the cluster. |

There are two ways to deploy optional components, you can either pass a comma separated list of components to the `--components` flag such as `zarf init --components k3s,git-server --confirm` or you can exclude the flags and say yes/no as each optional component gets prompted to you.
&nbsp;

## Composing Package Components
- TODO @JPERRY find an elegant way to mention that the 'required' key is not imported from the child. And that you can OVERRIDE the 'description' and 'secretName'

Existing components and packages within a zarf.yaml can be composed in new packages. This can be achieved by using the import field and providing a path to the zarf.yaml you wish to compose.

```yaml
components:
  - name: flux
    import:
     path: 'path/to/flux/package/directory/'
```

Unless you specify the component name in the import field, Zarf will try to import a component from the specified path that has the same name as the new component that is currently being defined. In the example above, since the new component is named 'flux' Zarf will import the 'flux' component from the specified path. If the new component is going to have a different name, you can specify the name of the package that needs to be imported in the import field.


```yaml
components:
  - name: flux
    import:
     path: 'path/to/flux/package/directory/'
     name: flux-v1.0.0
```

 Checkout the  [composable-packages](https://github.com/defenseunicorns/zarf/blob/master/examples/composable-packages/zarf.yaml) example to see this in action.

&nbsp;

## What Makes Up A Component
Zarf components can contain any of the following key/value pairs. Technically, none of the keys are required and you can use as many or few that makes sense to get to desired functionality:
```yaml
components:
  - name: <STRING> # A unique identifier for this component.
                   # The name can only contain alphabetical, numerical, or '-' characters.

    description: <STRING> # Message given to a user when deciding to enable this component or not

    required: <BOOLEAN> # If required, this component will always be deployed with the package

    secretName: <STRING> # The secret Zarf will use for the registry; default is 'zarf-registry'>
                         # The secret lives in the 'zarf' namespace.

    cosignKeyPath: <STRING> # Path to publickey to use for online resources signed by cosign.
                            # Signed files should be denoted with sget:// i.e. `sget://defenseunicorns/zarf-injector:0.4.3`

    images: <STRING LIST> # List of container images the component will use
                          # These images will be deployed to the Zarf provided docker registry

    repos: <STRING LIST> # List of git repos the component will use.
                         # These repos will be pushed into the gitea server.
                         # This also means the git-server component needs to be deployed during `zarf init`.
                         # Private repos need to have their credentialis listed in ~/.git-credentials as TODO @JPERRY


    files: <OBJ LIST>           # Files to move onto the system that will be doing the `zarf package deploy` command
      - source: <STRING>        # URL or path to where the file lives on the machine performing the `zarf package create` command
        shasum: <STRING>        # Optional value to verify remote sources
        target: <STRING>        # PAth to where the file will be placed on the system performing the `zarf package deploy` command
        executable: <BOOLEAN>   # Indicates whether or not executable permissions should be set on the file
        symlinks: <STRING LIST> # List of symlinks to create on the system performing the `zarf package deploy` command

    charts: <OBJ LIST>             # Helm charts to install during a package deploy
      - name: <STRING>             # Name of the component
      - url: <STRING>              # URL to where the chart is hosted (git or otherwise)
      - version: <STRING>          # Version of the chart to install
      - namespace: <STRING>        # Namespace to install the chart into
      - gitPath: <STRING>          # Path to the chart on the git repo
      - valuesFiles: <STRING LIST> # List of values files to use for the helm chart

    manifests: <OBJ LIST>             # Raw manifests that get converted into zarf-generated helm charts during deploy
      - name: <STRING>                # Name of the component
        namespace: <STRING>           # Namespace to install the manifest into
                                      # TODO @JPERRY does this default to 'default'?
        files: <STRING LIST>          #
        kustomizations: <STRING LIST> #

    dataInjectors: <OBJ LIST> # data packages to push into a running k8s cluster
      - source: <STRING>      # TODO
        target: <OBJ>         # TODO
          namespace: <STRING> # TODO
          selector: <STRING>  # TODO
          path: <STRING>      # TODO

    import: <OBJ> # References a component in another Zarf package to import
                  # When 'import' is provided, the only other keys that matter are the 'name',
                  # 'required', 'description', and 'secretName' keys.
      path: <STRING> # Path to the zarf.yaml file of the component to import
      name: <STRING> # Optional name of the component to import
                     # If not provided, it defaults to the name of the component being defined

    scripts: <OBJ>       # custom commands that run before or after component deployment
  	  showOutput: <BOOLEAN> # Indicates if the output of the scripts should be sent through stdout/stderr
      timeoutSeconds: <INT> # Amount of time (in seconds) to wait for the script to complete before throwing an error
                              # The default time is 5 minutes
      retry: <BOOLEAN>      # Indicates if the script should be retried if it fails
      before: <STRING LIST> # List of scripts to run before the component is deployed
      after: <STRING LIST>  # List of scripts to run after the component is deployed
```

&nbsp;


&nbsp;

## Further Reading

For more detail&mdash;like which components are on/off by default&mdash;there's no better place to check than the source: [zarf.yaml](https://github.com/defenseunicorns/zarf/blob/master/zarf.yaml).
