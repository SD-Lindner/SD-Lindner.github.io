---
layout: page
title: Patient Visit Trajectories
description: Using visit trajectory analysis to identify patient subgroups with distinct survival patterns
img: assets/img/cancer_trajectory.png
importance: 1
category: work
---

## Overview

This project presents a novel approach for stratifying cancer patients using visit trajectory analysis. By leveraging electronic medical records (EMRs) from the Department of Veterans Affairs (VA), we developed a methodology to identify patient subgroups with distinct survival patterns based on their healthcare utilization over time.

## Key Contributions

- **Trajectory-based patient representation**: Developed a method to represent patient visits as 2D coordinates using ICD codes, enabling visualization and analysis of healthcare trajectories
- **Unsupervised stratification**: Applied agglomerative hierarchical clustering to group patients based on their visit trajectory features
- **Survival analysis**: Demonstrated that identified clusters show statistically significant differences in survival outcomes

## Methodology

The approach consists of three main steps:

1. **Visit Mapping**: Patient visits are mapped to 2D coordinates using a model trained on ICD-10-CM codes, where clusters of similar medical conditions form distinct regions in the embedding space

2. **Feature Extraction**: For each patient, we compute features based on their trajectory through this embedded space, including:
   - Distance traveled between consecutive visits
   - Directional changes in the trajectory
   - Density of visits in different regions

3. **Clustering**: Hierarchical clustering identifies patient subgroups with similar trajectory patterns

## Results

Applied to a cohort of over 210,000 cancer patients from the VA healthcare system, the method identified distinct patient subgroups with significantly different survival curves (p < 0.001). The trajectory-based features captured clinically meaningful patterns related to disease progression and healthcare utilization.

## Technologies

- Python
- Clustering
- Electronic Medical Records processing

## Publication

This work was presented at the CCS 2024
