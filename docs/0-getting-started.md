# Getting Started
Welcome to the documentation about Zarf, the air-gap tool!
# Installing Zarf
<!-- TODO: @JPERRY Look at how other tools/apps do their instillation instructions -->
Until we get Zarf into common package managers, you can install the Zarf CLI by:
1. Download the latest release version from our [GitHub release page](https://github.com/defenseunicorns/zarf/releases).
2. Move the downloaded file onto your path. This can be done in your terminal with the command `mv ~/Downloads/{DOWNLOADED_RELEASE_FILE} /usr/local/bin/zarf`
3. Test out the CLI within your terminal with the command `zarf -version`. The version you downloaded from GitHub should print to your terminal.


# Where to next?
<!-- TODO: @JPERRY The goal of this section is to point the different user personas in the right direction. Is this achieving that? -->
Depending on how familiar you are with Kubernetes, DevOps, and Zarf, let's find what set of information would be most useful to you!

* If you're still not sure you understand the problem Zarf is trying to solve, it might useful to read through the 'Zarf Domain' section to get a better idea about the when/where/what Zarf is trying to help you achieve, starting with [What is Kubernets](./zarf-domain/what-is-kubernetes).

* If you're new to Zarf and want to understand more about what Zarf is 'under the hood' and how the Zarf packages are defined. Following the 'Zarf Basics' is probably best place for you. These guides give a higher level explication about how Zarf and it's packages work.  starting with the [Zarf CLI](./the-zarf-cli/the-zarf-cli) page.

* If you want to see some practical examples of what Zarf packages can do (and potentially try them out for yourself), the [examples directory](https://github.com/defenseunicorns/zarf/tree/master/examples) or the [packages directory](https://github.com/defenseunicorns/zarf/tree/master/packages) in the GitHub repo is probaby what you're looking for. Each example within the examples directory contains a set of README instructions for how you can deploy the example yourself.
> Note: The packages in the 'example' directory are for example purposes only. They contain simple configuration that is not representative of a production ready environment. The packages in the 'packages' directory are a lot smaller and are designed be used to support other production packages (such as the init-package that we provide).

* If you're already familiar with Zarf and want to find more information on how to create your own Zarf package, the [Creating Your Own Package](./zarf-advanced/creating-your-own-package) page is exactly what you're looking for.


### Dependencies for Zarf CLI Dev


### Dependencies for Zarf Package Deployments

<!-- TODO: @JPERRY are there special dependencies for package dev? -->
### Dependencies for Zarf Package Dev 