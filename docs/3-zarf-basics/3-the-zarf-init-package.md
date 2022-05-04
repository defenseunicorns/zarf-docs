---
sidebar_position: 3
---

# The Zarf 'init' Package

The init package is the zarf.yaml file that lives at the [root of the Zarf repository](https://github.com/defenseunicorns/zarf/blob/master/zarf.yaml). It is defined via composed components that all offer value for future packages to utilize. When the init package is run, it will create a `Zarf` namespace within your k8s cluster and 


## Mandatory Components

Zarf's work necessitates that some components are "always on" (a.k.a. required & cannot be disabled). These components are part of the default [init package](../zarf.yaml) and are always deployed whenever you perform a `zarf init` command. Those include:

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



The registry seeding has a unique solution to the 'chicken or the egg' problem of having to get an image of the container registry onto the cluster before you actually have a container registry on the cluster to push to. If you're interested in how we solved that problem you can read about it [here](/docs/zarf-advanced/3-seeding-the-zarf-registry).