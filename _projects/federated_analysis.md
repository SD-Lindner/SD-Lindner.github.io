---
layout: page
title: Federated Analysis for Health Data
description: Privacy-preserving distributed analytics enabling international health research without sharing sensitive patient data
img: assets/img/federated_analysis.png
importance: 2
category: work
related_publications: true
---

## Overview

Sharing health data across institutions and international jurisdictions faces major privacy barriers, particularly under regulations like GDPR. Federated analysis offers a solution by performing computations locally on distributed datasets while exchanging only aggregate statistical results—never raw patient data. This project implements and evaluates federated analysis infrastructure for enabling multi-country health research.

## Key Contributions

- **Cross-jurisdictional infrastructure**: Established a two-node federated analysis system between Montreal (Canada) and Vienna (Austria) using DataSHIELD, enabling pooled analysis without data transfer
- **Privacy-preserving pooling**: Demonstrated that federated approaches yield identical results to centralized pooled analysis while keeping individual-level data on local servers
- **Comparative evaluation**: Benchmarked federated analysis against synthetic data generation for utility, privacy, and implementation effort
- **Cardiovascular health application**: Applied the infrastructure to assess sex and gender differences in cardiovascular health across Canadian and Austrian populations

## Methodology

The federated analysis framework operates through distributed computation:

1. **Node Setup**: Establish secure servers at each participating institution with requisite security protocols for cross-jurisdictional remote access

2. **Data Harmonization**: Align variables across datasets using Maelström research guidelines, creating compatible data dictionaries without transferring data

3. **Distributed Regression**: Execute analysis centrally while individual-level participant data remains on local servers—only intermediate regression results are exchanged between nodes

4. **Result Aggregation**: Combine study-level estimates through meta-analysis or direct pooling of sufficient statistics

## Results

The federated analysis system successfully enabled international comparison of cardiovascular health determinants across 79,000+ individuals from Canadian and Austrian health surveys. The approach produced results equivalent to centralized pooled analysis, confirming that privacy-preserving methods need not sacrifice analytical validity. Implementation required approximately 18 months for infrastructure setup, highlighting the importance of institutional coordination and security protocols.

## Technologies

- R
- DataSHIELD / Opal
- Secure Server Infrastructure
- GDPR-compliant Protocols
- Statistical Modeling

{% cite lindner2023synthetic %}
