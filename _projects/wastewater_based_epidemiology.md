---
layout: page
title: Wastewater-Based Epidemiology
description: Estimating unreported SARS-CoV-2 infections using wastewater surveillance data
img: assets/img/wwbe.jpeg
importance: 1
category: work
---

## Overview

This project presents a novel approach for estimating unreported SARS-CoV-2 infections in Austria using wastewater-based epidemiology (WBE). By analyzing longitudinal wastewater data from 113 treatment plants covering 73% of Austria's population, we developed a method to estimate total COVID-19 cases by integrating reported cases, testing volume, and viral load measurements while accounting for variant-specific shedding behavior.

## Key Contributions

- **Test-activity scaling**: Discovered that the relationship between wastewater viral load per case and testing volume follows a power-law scaling, enabling estimation of unreported cases
- **Variant-adjusted estimation**: Developed a regression model that accounts for shedding differences across SARS-CoV-2 variants (Delta, BA.1, BA.2, BA.5)
- **Cross-validation**: Validated the approach across two independent wastewater monitoring datasets with consistent results

## Methodology

The approach consists of three main components:

1. **Data Integration**: Combined wastewater measurements from 113 treatment plants with reported COVID-19 cases, testing numbers from Austria's Epidemiological Reporting System, and variant prevalence data

2. **Regression Model**: Developed an OLS regression model using the logarithm of viral load per reported case as the dependent variable, with testing volume and variant composition as predictors

3. **Case Estimation**: Estimated total cases by scaling reported cases based on the ratio of observed to expected wastewater-to-case relationships under a hypothetical universal testing scenario

## Results

![Estimated vs Reported Cases](/assets/img/plot_wwbe.jpg)

The method revealed substantial underreporting that increased over time. At the BA.2 wave peak (March 2022), the ratio of estimated total to reported cases was approximately 1.49. By the BA.5 wave peak (July 2022), this ratio increased to 5.48, reflecting reduced testing activity. The analysis also found evidence of variant-specific shedding rates, with Delta showing higher shedding per case compared to Omicron variants.

## Technologies

- Python
- OLS Regression
- Wastewater surveillance data processing
- RT-qPCR viral load quantification

## Publication

Lindner, S.D., Oberacher, H., Weyermair, K., et al. (2025). Estimating unreported SARS-CoV-2 infections in Austria using wastewater-based epidemiology. *Heliyon*, 11, e43748. https://doi.org/10.1016/j.heliyon.2025.e43748
