---
layout: page
title: Homophily-Based Social Group Formation
description: A spin glass self-assembly framework for understanding how opinions drive the emergence of social groups
img: assets/img/group.gif
importance: 1
category: work
related_publications: true
---

## Overview

Homophily—the tendency of humans to attract each other when sharing similar features, traits, or opinions—has been identified as a main driving force behind structured societies. This project asks to what extent homophily can explain the formation of social groups, particularly their size distribution, using a spin-glass-inspired framework where opinions dynamically self-assemble individuals into groups.

## Key Contributions

- **Spin glass self-assembly model**: Developed a framework where opinions are represented as multidimensional spins that dynamically self-assemble into groups based on intragroup homophily and intergroup heterophily
- **Phase diagram characterization**: Computed the nontrivial phase diagram by solving self-consistency equations for "magnetization" (combined average opinion), revealing first-order transitions
- **Empirical validation**: Analytically derived group-size distributions that successfully match empirical data from online communities (Pardus massive multiplayer game)

## Methodology

The approach combines statistical physics with social dynamics:

1. **Group Hamiltonian**: Define social stress as an energy function where individuals within a group share similar opinions (homophily) while opinions between groups tend to differ (heterophily)

2. **Self-Assembly Theory**: Apply canonical ensemble thermodynamics with corrections for structure formation statistics to derive equilibrium group-size distributions

3. **Mean-Field Approximation**: Derive self-consistency equations for average group opinion (magnetization) as a function of temperature (willingness to change opinions or groups)

4. **Monte Carlo Simulations**: Validate analytical predictions using Metropolis algorithm simulations with spin updates and group membership changes

## Results

Below a critical (binodal) temperature, two stable phases coexist: an ordered phase with nonzero magnetization and large clusters, and a disordered phase with zero magnetization and no clusters. The system exhibits a first-order transition where large groups disintegrate above the critical temperature. The theoretical group-size distribution matches the Pardus online game data almost perfectly, with both showing Gini coefficients (G ≈ 0.90) near the percolation transition point.

## Technologies

- Statistical Physics
- Spin Glass Theory
- Monte Carlo Simulations
- Self-Assembly Thermodynamics
- Network Analysis

{% cite prl2023homophily lindner2021thermodynamics %}
