---
sidebar_position: 100
---

# Docs Coming Soon

* The fact that you could do composable packages (and how that works)
* The fact that Zarf uses the ~/.git-credentials for private repos
    - [ ]  Is Zarf not able to use the ssh keys that are configured?
* How to create `zarf connect` endpoints within my package
    - How to manually do a `zarf connect` without a pre-defined endpoint
* How does `zarf destroy` work vs `zarf destroy --remove-components`?
    - How does `--remove-components` know what components to remove?
* What secret values can you override on a `zarf init`? (storage-class, secret, nodeport)
* I don’t think any of the `zarf prepare` subcommands are documented anywhere
    - patch-git
    - find-images
    - sha256sum
* I don’t think any of the `zarf tools` subcommands are really documented either
    - archiver
    - config-schema
    - get-admin-password
    - monitor
    - registry - does this even work?
    - trust-root-ca - this might have just been removed
* The fact that cleanup scripts are put into /opt/zarf
* The fact that whatever the host ‘tmp’ directory is used during package deploy (and that it doesn’t get cleaned after an error
* The fact that there’s a .zarf-image-cache in the home directory unless you explicitly tell it to be somewhere else
* The fact that the secrets (such as username/passwords for zarf things) are contained in a secret inside the k8s zarf namespace and describe how to get them..
* The fact that you can deploy a remote package.. describe how to do it and describe how/when the `--insecure` and `--shasum` flag is necessary
* The fact that when git-server component is deployed, a read-only user is created and added to every git repo that gets pushed to gitea..
* The fact that urls provided to the package are mutated once deployed to point to the local zarf hosted resources (gitea, docker registry, etc.)
* the go-git not working with the new git protocal that Azure uses so we are doing a failover to trying to run `git` on the host to get it to work