# Overview

# What is Zarf?

![Zarf](../static/img/zarf-logo.png)

Zarf is a tool that simplifies the setup & administration of Kubernetes clusters, cyber systems & workloads that support DevSecOps "across the [air gap](https://en.wikipedia.org/wiki/Air_gap_(networking))."

It provides a static Go binary CLI that can be run anywhere. This CLI can pull, package, and install all the things your clusters need to run and any necessary resources to standup infrastructure (such as Terraform). 

Zarf runs on [a bunch of operating systems](./operator-manual/supported-oses).

<br />
<br />

# Why Use Zarf?
Most of the software ecosystem assumes your systems have access to the internet. The world (for good reasons) has become more and more dependent upon Software as a Service (SaaS), which assumes a robust connection to the internet and a willingness to inherently trust 3rd party providers. Although this makes sense for most of the world, certain secure systems must operate either fully disconnected, semi-disconnected, or might need the ability to disconnect in case of emergencies (like while under an active cyber attack). Although only a small percentage of systems, these secure systems make up some of the most vital systems globally, such as Aerospace and Defense, Finance, Healthcare, Energy, Water, Sewage, and many Federal, Local, and State Government systems.  

<br />
<br />

# Explain Zarf Like I'm Ten(ish)

Zarf allows you to bundle portions of "the internet" into a single package to be installed later following specific instructions. A Zarf package is just a single file that includes everything you need to manage a system or capability while fully disconnected. Think of a disconnected system as a system that always is or sometimes is on airplane mode.

You bring this single file (we call it a package) to the system you want to install or update new software on. The package includes instructions on how to assemble all the pieces of software (components) once on the other side. These instructions are fully "declarative," which means that everything is represented by code and automated instead of manual. The hardest part is assembling the declarative package on the connected side. But once everything is packaged, Zarf makes even very complex systems easy to install, update, and maintain within disconnected systems.

Such packages also become highly distributable, as they can now run on edge, embedded systems, secure cloud, data centers, or even in a local environment. This is incredibly helpful for organizations that need to integrate and deploy software from multiple, secure development environments from disparate development teams into disconnected IT operational environments. Zarf helps ensure that development teams can integrate with the production environment they are deploying to, even if they will never actually touch that environment.

Zarf makes DevSecOps for air gap possible.