#!/usr/bin/env bash
# Run the SC_ARC sugarcane FSPM headless with GroIMP 3.x (no GUI; suitable for cluster jobs).
#
# Usage:  ./run_headless.sh [cpu|gpu]        (default: cpu)
#
# Environment variables (all optional):
#   GROIMP_HOME      GroIMP app folder containing platform.core-*-jar-with-dependencies.jar
#                    (default: ../groimp/app next to this project)
#   JAVA             java executable, must be Java 21 (default: java on PATH)
#   JAVA_MEM         max heap (default: 8g)
#   SCARC_INPUT      input folder  (default: <project>/data/Input_Data/)
#   SCARC_OUTPUT     output folder (default: <project>/output/)
#   SCARC_MAX_STEPS  safety limit on simulation steps (default: 100000)
#
# Exit code: 0 = finished, 1 = error, 2 = stopped at SCARC_MAX_STEPS.
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GROIMP_HOME="${GROIMP_HOME:-$PROJECT_DIR/../groimp/app}"
JAVA="${JAVA:-java}"
JAVA_MEM="${JAVA_MEM:-8g}"
MODE="${1:-cpu}"

case "$MODE" in
  cpu) export SCARC_LIGHT=cpu ;;   # de.grogra.rgg.LightModel (multi-threaded CPU ray tracer)
  gpu) export SCARC_LIGHT=gpu ;;   # de.grogra.rgg.FluxLightModel (GPUFlux, OpenCL)
  *) echo "usage: $0 [cpu|gpu]" >&2; exit 64 ;;
esac

JAR="$(ls "$GROIMP_HOME"/platform.core-*-jar-with-dependencies.jar 2>/dev/null | head -n 1 || true)"
if [[ -z "$JAR" ]]; then
  echo "GroIMP core jar not found in GROIMP_HOME=$GROIMP_HOME" >&2
  exit 1
fi

export SCARC_HOME="$PROJECT_DIR"
cd "$GROIMP_HOME"
exec "$JAVA" -Xmx"$JAVA_MEM" -Djava.awt.headless=true \
  -jar "$JAR" --headless "$PROJECT_DIR/project.gs"
