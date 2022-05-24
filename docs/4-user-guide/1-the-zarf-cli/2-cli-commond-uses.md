# Common CLI Uses

The next [CLI Commands](./cli-commands/zarf) section has the documentation about all of the available commands and their flags. This goal of this page is to give a quick overview of common use cases for the Zarf CLI. 


At the end of the day, all of the efforts put into Zarf has been to make it easy to deploy and manage packages on an air-gapped environment. Because of this, all of the commands Zarf offers really boils down to make it easier to do two specific things, building and deploying packages.

<br />

## Building Packages
The Zarf CLI is used to create 'Zarf packages' that can be deployed at a later date. The [zarf package create](./cli-commands/package/zarf_package_create) command looks for a file named `zarf.yaml` in the current directory and uses it to create a binary package. The package that gets created has all the resources and dependencies that the `zarf.yaml` referenced (such as git repositories and container images). Once a package is created, it can be deployed onto almost any cluster, local or remote.

More information about Zarf packages is available on the [Understanding Zarf Packages](../zarf-packages/zarf-packages) page.

<br />

## Initializing a Cluster
Before you are able to deploy onto a cluster, Zarf needs to initialize the cluster to be ready. This is done through the [zarf init](./cli-commands/zarf_init) command. At the beginning of the initialization process, if you don't already have a k8s cluster running, Zarf can deploy a single node k3s cluster for you. During the initialization process, Zarf will create a 'zarf' namespace and deploy an in-cluster Docker registry (used to host container images future packages will need), a 'zarf agent' mutating webhook (to redirect outgoing requests into the internally hosted resources), an optional gitea server (to host the git repositories future packages will need), and a handful of secrets.

:::note
Depending on the permissions of your user, if you are installing k3s through the `zarf init` command you may need to run the command as a privileged user. This can be done by either:

1. Becoming a privileged user via the command `sudo su` and then running all the Zarf commands as you normally would.
2. Manually running all the Zarf commands as a privileged user via the command `sudo {ZARF_COMMAND_HERE}`.
3. Running the init command as a privileged user via `sudo zarf init` and then changing the permissions of the `~/.kube/config` file to be readable by the current user.
:::

<br />

## Deploying Packages
As stated above, the entire purpose of Zarf is to make it easier to deploy applications onto air gapped environments. This is where that happens! The [zarf package deploy](./cli-commands/package/zarf_package_deploy) command takes a package and deploys it onto a cluster that has already been initialized. Since the package has all of its dependencies built-in, it can be deployed onto any cluster, even without an external internet connection. The dependency resources are pushed onto the cluster in their respective places, such as an in-cluster Gitea git server or a Docker registry, and then the application is deployed as instructed in the `zarf.yaml` file (i.e. deploying a helm chart, deploying raw k8s manifests, or even just executing a series of shell commands).

More information about Zarf packages is available on the [Understanding Zarf Packages](../zarf-packages/zarf-packages) page
