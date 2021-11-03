---
title: "Ocaml VS Code Debugging"
date: 2021-11-01T13:28:49+04:00
draft: true
---

# Setting Up OCaml VSCode Debbuging

## Install earlybird

```bash
opam install earlybird
```

## Create a VSCode Launch Config

Following: https://github.com/hackwaly/ocamlearlybird#example-launch-configuration

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "test_program",
            "type": "ocamlearlybird",
            "request": "launch",
            "stopOnEntry": true,
            "console": "integratedTerminal",
            "program": "${workspaceFolder}/_build/default/examples/interact/test_program.bc",
            "onlyDebugGlob": "<${workspaceFolder}/**/*>",
            "yieldSteps": 1024,
            "cwd": "${workspaceFolder}"
        }
    ]
}
```

## Output Bytecode Using Dune

```lisp
(executable
 (name main)
 (modes byte exe))
```

