## zarf package deploy

Deploys an update package from a local file or URL (runs offline)

```
zarf package deploy [PACKAGE] [flags]
```

### Options

```
      --components string   Comma-separated list of components to install.  Adding this flag will skip the init prompts for which components to install
      --confirm             Confirm package deployment without prompting
  -h, --help                help for deploy
      --insecure --shasum   Skip shasum validation of remote package. Required if deploying a remote package and --shasum is not provided
      --shasum --insecure   Shasum of the package to deploy. Required if deploying a remote package and --insecure is not provided
```

### Options inherited from parent commands

```
  -a, --architecture string   Architecture for OCI images
  -l, --log-level string      Log level when running Zarf. Valid options are: warn, info, debug, trace
```

### SEE ALSO

* [zarf package](zarf_package.md)	 - Pack and unpack updates for the Zarf gitops service.

###### Auto generated by spf13/cobra on 20-May-2022