$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$runtimeDir = Join-Path $projectRoot 'runtime'
$localGhost = Join-Path $projectRoot '.tools\npm\ghost.cmd'

if (-not (Test-Path $runtimeDir)) {
    throw "Ghost runtime is missing. Follow the setup steps in README.md first."
}

$ghostCommand = if (Test-Path $localGhost) { $localGhost } else { (Get-Command ghost -ErrorAction Stop).Source }
& $ghostCommand start --dir $runtimeDir --no-color

