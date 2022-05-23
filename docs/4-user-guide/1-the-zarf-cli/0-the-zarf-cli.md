# The Zarf CLI
<!-- TODO: @JPERRY This text seems weird because of how short it is. What else can we be saying here? -->
The Zarf tool is a statically built Go binary. The Zarf CLI is used to perform operations around Zarf Packages, such as creating them on your local machine and deploying them to wherever you want!

The Zarf CLI is a completely open-source project  

You can download a prebuilt release copy of the CLI from our [GitHub releases page](https://github.com/defenseunicorns/zarf/releases) or build your own manually by following the steps listed in the [building your own cli page](./building-your-own-cli).


## I have a CLI.. Now What?
First, lets test to make sure the CLI you have works. You can execute the CLI by running a command like this: `./path/to/cli/file/{zarf} --help` where `{zarf}` is the name of the binary you have built (i.e. zarf-mac-intel, zarf-mac-apple, or zarf). If Zarf is working properly you should see a list of all the command options as well as a short description for what each command does.

If you want to make your life a little easier you can put the Zarf CLI on your $PATH so that instead of always need to path to the binary you can just use `zarf` and it will find it for you. The list of the directories in your PATH can be seen by running `echo $PATH`. As long as you move your CLI to one of those directories you will be able to execute it without having to path to it. One common $PATH you can use is `mv ./path/to/cli/file/{zarf} /usr/local/bin/zarf`

> Note: Throughout the rest of the does we will describing commands as `zarf {command}`, this assumes that the CLI is in your path.

## Zarf Commands
Zarf has multiple commands to make building, deploying, and maintaining packages easier. Some commands also have multiple sub-commands under them (i.e. the `zarf package` command has `zarf package deploy`, `zarf package create`, and `zarf package inspect` as sub-commands). All of the commands and sub-commands available have a short description of what they do when the `--help` flag is provided. These descriptions get more detailed the further down you go into the command hierarchy (i.e. `zarf package --help` will give a short description about what the deploy command does but `zarf package deploy --help` will give a longer and more informative description). Feel free to explore around the different commands available to get a feel for what Zarf can do.

The most common commands that get used are `zarf init`, `zarf package create` and `zarf package deploy`. More detail on the commands are provided in the next section!

<!-- TODO: @JPERRY Does cobra have a good way to export CLI definitions for documentation? That would be a really useful tool -->