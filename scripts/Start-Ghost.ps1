$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$runtimeDir = Join-Path $projectRoot 'runtime'
$localGhost = Join-Path $projectRoot '.tools\npm\ghost.cmd'

if (-not (Test-Path $runtimeDir)) {
    throw "Ghost 运行目录不存在，请先按 README 执行安装。"
}

$ghostCommand = if (Test-Path $localGhost) { $localGhost } else { (Get-Command ghost -ErrorAction Stop).Source }
& $ghostCommand start --dir $runtimeDir --no-color

