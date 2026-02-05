---
layout: page
title: Sex and Gender in Health Outcomes
description: Integrating biological sex and socio-cultural gender dimensions into chronic disease research across international cohorts
img: assets/img/gender_medicine.png
importance: 1
category: work
related_publications: true
---

## Overview

Sex and gender are often erroneously used interchangeably in health research, yet both independently influence disease risk, symptom presentation, treatment response, and health outcomes. This research program—part of the GOING-FWD consortium (Gender Outcomes INternational Group: to Further Well-being Development)—develops methodologies and generates evidence on how sex and gender shape health across cardiovascular, metabolic, renal, and neurodegenerative diseases in Austria, Canada, Spain, and Sweden {% cite bmjgh2021goingfwd %}.

## Key Contributions

- **GOING-FWD Framework**: Developed a standardized 5-step methodology to retrospectively identify and analyze gender-related factors (identity, roles, relations, institutionalized gender) in existing health datasets
- **Gender-disease interactions**: Demonstrated that socioeconomic gender variables (education, marital status, employment, household size) differentially impact chronic disease associations between males and females
- **Cross-country analysis**: Enabled privacy-preserving international comparisons using federated analysis and synthetic data generation
- **Cardiovascular health metrics**: Assessed country-level differences in cardiovascular health using modified CANHEART indices, revealing distinct sex-gender patterns across populations

## Methodology

The research integrates multiple complementary approaches:

1. **Gender Variable Identification**: Compile "wish lists" of gender-related factors based on the Women Health Research Network framework covering identity, roles, relations, and institutionalized gender

2. **Data Harmonization**: Align variables across international datasets using Maelström research guidelines for retrospective harmonization

3. **Privacy-Preserving Analysis**: Apply federated analysis (DataSHIELD) and synthetic data generation to enable cross-jurisdictional pooling while respecting GDPR and local privacy regulations {% cite lindner2023synthetic %}

4. **Statistical Modeling**: Use multivariate regression with interaction terms to quantify how gender variables modify disease associations differently for males and females

## Results

Gender factors—independent of biological sex—emerge as powerful predictors of health outcomes. In hypertension research, females show stronger associations between socioeconomic factors and comorbidities (myocardial infarction, arthrosis, renal disease) compared to males {% cite jpm2024socioeconomic %}. Patients exhibiting gender factors traditionally ascribed to women's societal roles face higher risks of adverse outcomes regardless of biological sex. These effects vary by country-level gender inequality.

## Technologies

- R / Python
- DataSHIELD (Federated Analysis)
- Synthetic Data Generation
- European Health Interview Survey
- Machine Learning
