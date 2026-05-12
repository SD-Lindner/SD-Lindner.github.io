---
layout: post
title: How opinions drive the formation of social groups
date: 2026-05-12 12:00:00+0200
description: An interactive animation of the spin-glass self-assembly model from our PRL paper on homophily-based group formation.
related_publications: true
published: true
minutes_read: 4
---

Why do people cluster into groups? And why do those groups tend to be internally similar — politically, culturally, in taste? The short answer is **homophily**: the tendency to associate with people who share your views. But homophily alone doesn't tell you much about the *structure* of the groups that form — how large they are, how stable, or what happens when social temperature rises.

In {% cite prl2023homophily %}, we showed that you can actually derive the equilibrium group-size distribution analytically, starting from a surprisingly simple physical model. The idea is to treat opinions as spins and social groups as clusters — borrowing the machinery of spin-glass physics.

### The model in plain terms

Each person holds an opinion represented as a multidimensional vector — think of G different yes/no questions, each answered independently. People can belong to a group or be alone, and two things can happen at each step:

- **Change your mind.** You're more likely to update an opinion if you're the odd one out in your group — social pressure pushes you toward the local consensus.
- **Change your group.** You can leave your current group and join another, or go it alone. You're more likely to move to a group that's more aligned with your current opinions.

Both moves are governed by a single parameter: **temperature**, T — representing the willingness to change one's opinion or group. Low temperature means people are stubborn and groups become large and internally coherent. High temperature means everyone keeps switching and no stable groups form.

*(The interactive animation below simplifies to a single binary opinion ↑ or ↓, to keep things visual. The paper uses G=3 opinion dimensions.)*

### What happens at the phase transition

The key result of the paper is that this system has a **first-order phase transition** with two characteristic temperatures. The *binodal* temperature $T_B$ marks the point above which only the disordered phase is stable. The *spinodal* temperature $T_S$ marks the point below which the system spontaneously forms large groups even from a disordered start. Between $T_S$ and $T_B$, both an ordered phase (large aligned clusters, high magnetisation) and a disordered phase (no clusters, zero magnetisation) are stable — which one the system ends up in depends on initial conditions. This hysteresis is the hallmark of a first-order transition.

The model predicts the group-size distribution at the transition point analytically. We showed that this predicted distribution closely matches empirical data from the Pardus online multiplayer game, with both showing Gini coefficients of $G \approx 0.90$ near the transition.

### Play with the simulation

The animation below runs the Metropolis MC directly in your browser. Blue arrows are ↑ spins, red are ↓ — a simplified 1D stand-in for the paper's multidimensional opinions. Agents that share a group are enclosed in a bubble; the bubble colour reflects the group's average opinion.

Try dragging the temperature slider from high to low and watch the transition: isolated individuals coalesce into factions and opinions align within each group. To see the hysteresis, try starting from "one group (all ↑)" at high temperature and watch the ordered state dissolve — then start from "random singletons" at the same temperature and notice the system stays disordered.

<div style="width:100%; height:520px; border-radius:12px; overflow:hidden; margin: 2rem 0; border: 1px solid rgba(128,128,128,0.2);">
  <iframe
    src="/assets/html/spin_glass_groups.html"
    style="width:100%; height:100%; border:none; display:block;"
    title="Spin-glass social group formation simulation"
  ></iframe>
</div>

The full derivation — including the self-consistency equations for the magnetisation, the canonical ensemble treatment of group formation, and the comparison to the Pardus data — is in {% cite prl2023homophily %}, led by Jan Korbel. The thermodynamic framework for structure-forming systems that this model builds on is developed in {% cite lindner2021thermodynamics %}.
