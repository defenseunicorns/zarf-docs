---
sidebar_position: 0
---

# The Zarf CLI

The Zarf tool is a statically built Go binary. 

### Getting Your Own Zarf CLI

A pre-compiled binary is available for arm64 and amd64 machines under the 'Assets' tab of our latest releases on [GitHub](https://github.com/defenseunicorns/zarf/releases).

If you want to built the CLI from scratch, you can also do that! In order to do that you will need to make sure you have the following dependencies correctly configured:
1. The Zarf repository cloned down `git clone git@github.com:defenseunicorns/zarf.git` or `git clone https://github.com/defenseunicorns/zarf.git`
2. Have Go 1.18.x installed on your PATH (instructions can be found [here](https://go.dev/doc/install))
3. 'make' utility installed on your PATH (this comes default with many OS's)

Once you have the dependencies configured you can build the Zarf CLI by running the following commands:
```bash
cd zarf
make build-cli # This will build binaries for linux, M1 Mac, and Intel Mac machines
               # This puts the built binaries in the ./build directory
```
 > Note: If you know which specific binary type you want you can substitute the `make build-cli` with either `make build-cli-linux` or `make build-cli-mac`.

 Under the hood, the make command is executing a `go build -ldflags="-s -w -X 'github.com/defenseunicorns/zarf/src/config.CLIVersion=$(CLI_VERSION)'" -o ./build/zarf ./src/main.go` command with specific `CGO_ENABLED`, `GOOS`, and `GOARCH` flags depending on the distro and architecture of the system it is building for. The `CLI_VERSION` is set to whatever the latest tag is in the repository as defined by `git describe --tags`.


# I have a CLI... Now What?

First, lets test to make sure the CLI you have works. You can execute the CLI by running a command like this: `./path/to/cli/file/{zarf} --help` where `{zarf}` is the name of the binary you have built (i.e. zarf-mac-intel, zarf-mac-apple, or zarf). If Zarf is working properly you should see a list of all the command options as well as a short description for what each command does.
> Note: If you want to make your life a little easier you can put the Zarf CLI on your PATH so that instead of always need to path to the binary you can just use `zarf` and it will find it for you. The list of the directories in your PATH can be seen by running `echo $PATH`. As long as you move your CLI to one of those directories you will be able to execute it without having to path to it.

> Note: Throughout the rest of the does we will describing commands as `zarf {command}`, this assumes that the CLI is in your path.

Some commands have multiple sub-commands under them (ie the `zarf package` command has `zarf package deploy`, `zarf package create`, and `zarf package inspect` as sub-commands). All of the commands and sub-commands available have a short description of what they do when the `--help` flag is provided. These descriptions get more detailed the further down you go into the command hierarchy (i.e. `zarf package --help` will give a short description about what the deploy command does but `zarf package deploy --help` will give a longer and more informative description). Feel free to explore around the different commands available to get a feel for what Zarf can do.

> The most common commands that get used are `zarf init`, `zarf package create` and `zarf package deploy`.