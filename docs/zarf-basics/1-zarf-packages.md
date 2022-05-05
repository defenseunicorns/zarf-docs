---
sidebar_position: 1
---

# Understanding Zarf Packages

A Zarf package is a single binary Tarball that contains everything you need to deploy a system or capability while fully disconnected. Zarf packages are defined by a `zarf.yaml` file. 

Zarf packages are built while 'online' and connected to whatever is hosting the dependencies your package definition defined. When being built, all these defined dependencies are pulled from the internet and stored within the tarball package. Because all the dependencies are now within the tarball, the package can be deployed on to disconnected systems that don't have connection to the outside world.

The `zarf.yaml` file, that the package builds from, defines declarative instructions on how capabilities of the package should be deployed. The declarative nature of the package means everything is represented by code and automatically runs as it is configured, instead of having to give manual steps that might not be reproducible on all systems.

### Deploying on to Airgapped Systems
Zarf packages are built with all the dependencies necessary being included within the package itself, this is important when deploying on to systems. Since there is no need for an outbound connection to the internet, these packages become highly distributable and can be run on edge, embedded systems, secure cloud, data centers, or even in a local environment.

## Types of Zarf Packages
There are two types of Zarf packages, a `ZarfInitConfig` and a `ZarfPackageConfig`. The package type is defined by the `kind:` field in the zarf.yaml file.

For the remainder of the docs, we will often refer to the `ZarfInitConfig` as an `init config` or `init package` package and the `ZarfPackageConfig` as any `package`.

### ZarfInitConfig
The init package is the package you use to initialize your cluster to be ready to deploy other Zarf packages on to. 

The init package needs to be run on every cluster you want to deploy another package onto, even if the clusters share the same host. Init packages will almost always be the first Zarf package you deploy onto a cluster. The only exception where you wouldn't use an init package first is if the machine you are deploying onto doesn't have a k8s cluster running yet, in those situations you can build a package that installs the k8s cluster itself (assuming you don't want the k3s option that the init package offers). 

While initializing, Zarf will seed your cluster with an container registry so it can have a place to push images that other packages will need. The init package will also optionally deploy other functionality to your cluster, such as a git-server to push repositories to, or a simple PLG logging stack so you can monitor the things running on your cluster.

You initialize your cluster by running the command `zarf init`, which will search your current working directory for a file that matches the name `zarf-init-{ARCHITECTURE}.tar.zst` where the `ARCHITECTURE` matches the architecture of the host you are running on. If the machine your are deploying onto has a different machine architecture, you will have to specify the name of the architecture you are deploying onto. For example, if you are on a arm64 machine but are deploying on a amd64 machine, you will run `zarf init zarf-init-amd64.tar.zst`

At the end of the day, init packages are just like other packages, meaning they can also be run with `zarf package deploy zarf-init-{ARCHITECTURE}.tar.zst`

Init configs are not something you will have to create yourself unless you really want to customize how your cluster is installed / configured (i.e. if you wanted to use the init process to install a specifically configured k3s cluster onto your host machine), and even then it is often easier to create a specific package to do that before your run the init package.

The registry seeding has a unique solution to the 'chicken or the egg' problem of having to get an image of the container registry onto the cluster before you actually have a container registry on the cluster to push to. If you're interested in how we solved that problem you can read about it [here](/docs/zarf-advanced/seeding-the-zarf-registry).

### ZarfPackageConfig
'ZarfPackageConfigs' is any package that isn't an init package. These packages define named capabilities that you want to deploy onto your cluster. 

You can deploy a Zarf package with the command `zarf package deploy` which will bring up a prompt listing all of the files in your current path that match the name `zarf-package-*.tar.zst` so that you can select which package you want to deploy. If you already know which package you want to deploy, you can do that easily with the command `zarf package deploy {PACKAGE_NAME}`.

When Zarf is deploying the package, it will use the infrastructure that was created when doing the 'init' process (such as the docker registry and git server) to push all of the images and repos that the package needs to operate.


## What Makes Up A Package

Zarf packages are split into smaller chunks called 'components'. These components are defined more [here](./zarf-components) but a quick way to understand components are as the actual named capabilities that packages provide.


## Building A Package

The process of define a package is covered in [these docs](../zarf-advanced/creating-your-own-package). Assuming you have a package already defined, building the package itself is fairly simple.

`zarf package create` will look for a `zarf.yaml` file in the current directory and build the package from that file. Behind the scenes, this is pulling down all the resources it needs from the internet and placing them in a temporary directory, once all the necessary resources of retrieved, Zarf will create the tarball of the temp directory and clean up the temp directory.

