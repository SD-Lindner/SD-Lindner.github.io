---
layout: page
title: Controversiality in Online Conversations
description: A multi-method analysis of ideological polarization and thread dynamics on DerStandard
img: assets/img/derstandard.png
importance: 2
category: work
---

## Overview

Controversial discussions drive online discourse by attracting user engagement and shaping public opinion. This project presents a multi-method analysis of controversiality on DerStandard, an Austrian newspaper platform, integrating ideological positioning, network structure, and thread dynamics—an approach not previously combined in the literature.

## Key Contributions

- **Multi-perspective integration**: First study to combine ideological positioning, network structure, and thread dynamics for measuring online controversy
- **Large-scale German-language analysis**: Analyzed a decade-long dataset (2013–2022) comprising 75 million user comments and 412 million up/down-votes
- **Controversiality metric**: Developed a metric promoting balanced and sizeable inward positive and negative votes to assess user controversiality
- **Cross-method validation**: Compared structural thread measures with vote-based metrics, revealing they capture distinct aspects of controversy

## Methodology

The research is divided into two main analyses:

1. **Latent Ideology Extraction**:
   - Identify influencers by ranking users with most positive, negative, and controversial incoming votes
   - Apply Correspondence Analysis (CA) to obtain user and influencer embeddings
   - Validate influencer classification using Large Language Models (LLMs)
   - Explore alternative approach using SHEEP embedding on user–user signed networks

2. **Thread-Level Controversiality**:
   - Compare thread characteristics: depth, number of posts, negative votes
   - Compute controversy index based on h-index framework
   - Analyze author controversiality scores and inter-event response times
   - Measure polarization based on ideological stance of participating users

## Results

The CA embeddings reveal a densely connected positive cluster aligned with isolated positive influencers, plus two larger clusters showing internal positive and cross-cluster negative interactions. Thread analysis shows strong alignment between structural measures of controversy, while vote-based metrics exhibit weaker correlations—suggesting these metrics capture distinct aspects of controversiality.

## Technologies

- Python
- Network Science
- Correspondence Analysis
- SHEEP Embedding
- Large Language Models

## Publication

Fraxanet E., Candellone E., Cvetković D., Lindner S.D., Naushirvanov T., de Lamo E.G. (2025). A multi-method analysis of controversiality in online conversations on DerStandard. *Winter Workshop on Complex Systems (WWCS)*.
