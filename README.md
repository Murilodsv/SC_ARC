# FSPM_SC
FSPM SC — functional–structural sugarcane model (RGG/XL, GroIMP).

Originally developed with GroIMP 1.5 (2016). The `groimp3-port` branch runs on GroIMP 3.0 with a
GUI or headless, using either the CPU light model or the GPU light model.

## Project layout

| Path | Content |
|---|---|
| `project.gs`, `graph.xml`, `*.rgg` | GroIMP project and model sources |
| `META-INF/MANIFEST.MF` | file types for GroIMP. Required: without it, `graph.xml` and the textures don't load |
| `data/Input_Data/` | weather files `WTH_Pira_<year>.csv` (read from DOY 197 of `startingyear`) |
| `data/images/` | textures |
| `output/` | text tables written at the end of a run (git-ignored) |
| `run_headless.sh` | headless launcher for batch and cluster runs |

## Requirements

* **Java 21.** GroIMP 3.0 is built for Java 21. Newer JDKs (e.g. 27) fail to compile the model with
  `Unsupported class file major version`.
* **GroIMP 3.0 with the RGG and GPUFlux plugins.**
* **For the GPU light model:** an OpenCL runtime (the NVIDIA/AMD driver on a GPU node, or PoCL for
  CPU-only OpenCL).

## Running

GUI: open `project.gs` in GroIMP and use the `run` button, as before.

Headless:

```bash
export GROIMP_HOME=/path/to/groimp/app      # folder with platform.core-3.0.0-jar-with-dependencies.jar
export JAVA=/path/to/jdk-21/bin/java
./run_headless.sh cpu      # LightModel, multi-threaded CPU ray tracer
./run_headless.sh gpu      # FluxLightModel (GPUFlux / OpenCL)
```

The headless run performs `reset()`, then repeats `run()` + `derive()` until all `nrSims`
simulations have finished. It then writes `field.txt`, `plant.txt` and `light.txt` to the output
folder and exits. Exit codes: 0 = finished, 1 = error, 2 = stopped by `SCARC_MAX_STEPS`.

Optional environment variables:

| Variable | Default |
|---|---|
| `SCARC_INPUT` | `<project>/data/Input_Data/` |
| `SCARC_OUTPUT` | `<project>/output/` |
| `SCARC_LIGHT` | `cpu`. Set by `run_headless.sh`; in the GUI, set it to `gpu` or edit `oldLM` in `parameters.rgg` |
| `SCARC_MAX_STEPS` | `100000` (safety limit) |
| `JAVA_MEM` | `8g` |

To use a CPU-only OpenCL runtime (e.g. to test the GPU code path without a GPU):

```bash
conda install -c conda-forge pocl ocl-icd
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib OCL_ICD_VENDORS=$CONDA_PREFIX/etc/OpenCL/vendors POCL_DEVICES=cpu
./run_headless.sh gpu
```

## Changes made in the port

* Hard-coded Windows paths replaced by project-relative input and output folders
  (`inputDir()`, `outputDir()` in `CSVReaderFinal.rgg`).
* Light model selected through `activeLM()` (`environment.rgg`). Previously, organs and sensors
  always read results from the CPU `LightModel`, so `oldLM = false` computed light on the GPU but
  read zeros.
* Headless driver added: `startup()` / `run(Object)` in `main.rgg`.
* `project.gs`: source-file entries converted to the current format, texture paths moved to
  `data/images/`, and the 43 chart datasets emptied of old run data (1.2 MB → 61 KB; their
  definitions are kept so the saved chart panels still open).
* `META-INF/MANIFEST.MF` added (it was missing from the repository).
* `modules_organs.rgg` converted from Latin-1 to UTF-8.
