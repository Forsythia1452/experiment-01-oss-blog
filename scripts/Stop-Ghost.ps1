$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$runtimeDir = Join-Path $projectRoot 'runtime'
$localGhost = Join-Path $projectRoot '.tools\npm\ghost.cmd'
$ghostCommand = if (Test-Path $localGhost) { $localGhost } else { (Get-Command ghost -ErrorAction Stop).Source }
& $ghostCommand stop --dir $runtimeDir --no-color

