---
sidebar_position: 1
---

# Defining and Deploying Your Own Zarf Package

At this point you should be slightly familiar with Zarf.  If you're new to Zarf, you should start by reading the [What is Zarf](../zarf-basics/what-is-zarf) page.


# Types of Zarf Packages
There are two types of Zarf packages, a `ZarfInitConfig` and a `ZarfPackageConfig`. The package type is defined by the `kind:` field in the zarf.yaml file. Zarf init configs were mentioned briefly in the [What is Zarf](./what-is-zarf.md) page as the package you use to initialize your cluster to be ready to deploy other Zarf packages onto. Init configs are very rarely something you're going to have to create yourself and this document will be going over the `ZarfPackageConfig` instead.


# What is a Zarf Package
* A Zarf package is just a single file that includes everything you need to manage a system or capability while fully disconnected. Think of a disconnected system as a system that always is or sometimes is on airplane mode.

* The package includes instructions on how to assemble all the pieces of software (components) once on the other side. These instructions are fully "declarative," which means that everything is represented by code and automated instead of manual.

*  packages also become highly distributable

## What is a Zarf Component

## Creating a Zarf.yaml
Every Zarf package starts with a Zarf.yaml which must conform to this [json schema definition](../zarf.schema.json). This file defines the package's metadata as well as components that are to be deployed. Zarf packages are conceptually broken up into one more components, each of which define all the resources, dependencies, or commands that are required to deploy itself. Each component gets deployed asyncronously in the order that they're defined.


The following is an example of a really simple zarf.yaml:
```
This is a code block.

```




# JPERRY TODO LIST
- different package architectures and how those are defined
